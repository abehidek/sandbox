import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, refetch, isError, error, remove } = trpc.useQuery(
    ["auth.getSecretMessage"],
    {
      enabled: false,
      retry: false,
    }
  );

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <div className="border-2 p-5 flex flex-col items-center justify-center">
          <div className="text-2xl text-blue-500 flex justify-center items-center w-full">
            {data ? <p>{data}</p>
                  : isError ? <p>{error.message}</p> 
                            : <p>Click below</p>
            }
          </div>
          <button
            onClick={() => refetch()}
            className="bg-blue-500 text-white px-5 py-3"
          >
            fetch from trpc
          </button>
        </div>

        <div className="mt-5 border-2 p-5 flex flex-col items-center justify-center">
          <h1>Auth</h1>
          {session ? (
            <button
              onClick={() => signOut()}
              className="bg-blue-500 text-white px-3 py-3 mt-2"
            >
              Sign Out - {session.user?.name}
            </button>
          ) : (
            <>
              <button
                onClick={() => signIn("github")}
                className="bg-blue-500 text-white px-3 py-3 mt-2"
              >
                Sign In With Github
              </button>
              <button
                onClick={() => signIn()}
                className="bg-blue-500 text-white px-3 py-3 mt-2"
              >
                Sign In With Email
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

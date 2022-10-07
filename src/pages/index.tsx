import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Base from "../components/Base";
import getRSS from "../lib/rss";

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <Base>
      <div>
        <h1>Index page</h1>
      </div>
    </Base>
  );
};

export async function getStaticProps() {
  await getRSS();
  return { props: {} };
}

export default Home;

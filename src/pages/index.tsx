import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import Base from "../components/Base";
import getRSS from "../lib/rss";

const Home: NextPage = () => {
  const { data } = useSession();

  return (
    <Base>
      <div>
        <h1 className="text-[48px] font-black">
          Hi!, I’m Abe Hidek - A curious software and web developer learning
          things to build things
        </h1>
        <div className="mt-14 flex gap-4">
          <Envelope weight="bold" className="h-8 w-8" />
          <GithubLogo weight="bold" className="h-8 w-8" />
          <LinkedinLogo weight="bold" className="h-8 w-8" />
        </div>
      </div>
    </Base>
  );
};

export async function getStaticProps() {
  await getRSS();
  return { props: {} };
}

export default Home;

import Base from "@/src/components/Base";
import ListSnippetsComponent from "@/src/components/ListSnippets";
import { getAllSnippets, SnippetMeta } from "@/src/server/services/snippets";
import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

const SnippetsPage: NextPage<{ allSnippetsMeta: SnippetMeta[] }> = ({
  allSnippetsMeta,
}) => {
  const { data } = useSession();

  return (
    <Base>
      <p>Snippets</p>
      <ListSnippetsComponent allSnippetsMeta={allSnippetsMeta} />
    </Base>
  );
};

export async function getStaticProps() {
  const allSnippets = await getAllSnippets();
  const allSnippetsMeta = await Promise.all(
    allSnippets.map((snippet) => snippet.meta)
  );

  return { props: { allSnippetsMeta }, revalidate: 30 };
}

export default SnippetsPage;

import Base from "@/src/components/Base";
import ListSnippetsComponent from "@/src/components/ListSnippets";
import {
  getAllSnippetsMeta,
  SnippetMeta,
} from "@/src/server/services/snippets";
import type { NextPage } from "next";

const SnippetsPage: NextPage<{ allSnippetsMeta: SnippetMeta[] }> = ({
  allSnippetsMeta,
}) => {
  return (
    <Base>
      <p>Snippets</p>
      <ListSnippetsComponent allSnippetsMeta={allSnippetsMeta} />
    </Base>
  );
};

export async function getStaticProps() {
  return { props: { allSnippetsMeta: getAllSnippetsMeta() }, revalidate: 30 };
}

export default SnippetsPage;

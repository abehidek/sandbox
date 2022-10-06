import Base from "@/src/components/Base";
import ListUsesComponent from "@/src/components/ListUses";
import { getAllUses, UseMeta } from "@/src/server/services/uses";
import type { NextPage } from "next";

const SnippetsPage: NextPage<{ allUsesMeta: UseMeta[] }> = ({
  allUsesMeta,
}) => {
  return (
    <Base>
      <p>Snippets</p>
      <ListUsesComponent allUsesMeta={allUsesMeta} />
    </Base>
  );
};

export async function getStaticProps() {
  const allUses = await getAllUses();
  const allUsesMeta = await Promise.all(allUses.map((snippet) => snippet.meta));

  return { props: { allUsesMeta }, revalidate: 30 };
}

export default SnippetsPage;

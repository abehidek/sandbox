import { allUses } from "contentlayer/generated";
import Base from "@/src/components/Base";
import ListUsesComponent from "@/src/components/ListUses";
import { Use } from "contentlayer/generated";
import type { GetStaticProps, NextPage } from "next";

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

export type UseMeta = Omit<Use, "body">;

export function getStaticProps() {
  return {
    props: {
      allUsesMeta: allUses.map((use) => {
        const { body: _, ...meta } = use;
        return meta;
      }),
    },
    revalidate: 30,
  };
}

export default SnippetsPage;

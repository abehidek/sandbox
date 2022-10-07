import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Base from "@/src/components/Base";
import { allUses, Use } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allUses.map((use) => use.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const use = allUses.find((use) => use.slug === slug);
  return { props: { use } };
};

const SnippetPage: NextPage<{ use: Use }> = ({ use }) => {
  const { slug } = useRouter().query;
  const MDXContent = useMDXComponent(use.body.code);
  return (
    <Base>
      <h1>{use.title}</h1>
      <p>{use.description}</p>
      <MDXContent components={{ Image }} />
    </Base>
  );
};

export default SnippetPage;

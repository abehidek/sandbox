import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ViewCounterComponent from "@/src/components/ViewCounter";
import Base from "@/src/components/Base";
import { Snippet, allSnippets } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allSnippets.map((snippet) => snippet.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as { slug: string };
  const snippet = allSnippets.find((snippet) => snippet.slug === slug);

  return { props: { snippet } };
};

const SnippetPage: NextPage<{ snippet: Snippet }> = ({ snippet }) => {
  const { slug } = useRouter().query;
  const MDXContent = useMDXComponent(snippet.body.code);
  return (
    <Base>
      <ViewCounterComponent route="snippet.getViews" slug={slug} />
      <MDXContent components={{ Image }} />
    </Base>
  );
};

export default SnippetPage;

import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "@/src/utils/trpc";
import { SnippetMeta } from "@/src/server/services/snippets";
import ViewCounterComponent from "@/src/components/ViewCounter";
import Base from "@/src/components/Base";
import { allSnippets } from "contentlayer/generated";
import { Snippet } from "contentlayer/generated";
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

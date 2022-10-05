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
import {
  getAllSnippetsSlugs,
  getOneSnippet,
  SnippetMeta,
} from "@/src/server/services/snippets";
import ViewCounterComponent from "@/src/components/ViewCounter";

interface MDXSnippet {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: SnippetMeta;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSnippetsSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = await getOneSnippet(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { snippet: { source: mdxSource, meta } } };
};

const SnippetPage: NextPage<{ snippet: MDXSnippet }> = ({ snippet }) => {
  const { slug } = useRouter().query;
  return (
    <>
      <Head>
        <title>{snippet.meta.title}</title>
      </Head>
      <h1>{snippet.meta.title}</h1>
      <ViewCounterComponent route="snippet.getViews" slug={slug} />
      <p>{snippet.meta.description}</p>
      <p>{snippet.meta.date}</p>
      <MDXRemote {...snippet.source} components={{ Image }} />
    </>
  );
};

export default SnippetPage;

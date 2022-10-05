import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import {
  getOneArticle,
  getAllArticlesSlugs,
  ArticleMeta,
} from "@/src/server/services/articles";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "@/src/utils/trpc";
import { useRef, useState } from "react";

interface MDXArticle {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ArticleMeta;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArticlesSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = await getOneArticle(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { article: { source: mdxSource, meta } } };
};

const ArticlePage: NextPage<{ article: MDXArticle }> = ({ article }) => {
  const { slug } = useRouter().query;
  const articleViews = trpc.useQuery(
    ["article.getViews", { slug: slug?.toString() }],
    {
      refetchOnWindowFocus: false,
    }
  );
  return (
    <>
      <Head>
        <title>{article.meta.title}</title>
      </Head>
      <div className="flex">
        <p>updoot</p>
      </div>
      <h1>{article.meta.title}</h1>
      <p>{articleViews.data?.views} views</p>
      <p>{article.meta.readingTime}</p>
      <MDXRemote {...article.source} components={{ Image }} />
    </>
  );
};

export default ArticlePage;

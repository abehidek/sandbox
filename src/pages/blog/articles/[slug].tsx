import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { getArticleFromSlug, getSlugs, ArticleMeta } from "@/src/server/services";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trpc } from "@/src/utils/trpc";

interface MDXArticle {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ArticleMeta;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = await getArticleFromSlug(slug);
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
  const router = useRouter();
  const { slug } = router.query

  // make these two lines below execute one time only, need to trpc query without useEffect
  const response = trpc.useQuery(["articles.get-view", slug?.toString()], {
    staleTime: Infinity,
    cacheTime: Infinity
  });

  return (
    <>
      <Head>
        <title>{article.meta.title}</title>
      </Head>
      <h1>{article.meta.title}</h1>
      <p>{article.meta.views + 1}</p>
      <MDXRemote {...article.source} components={{ Image }} />
    </>
  );
};

export default ArticlePage;

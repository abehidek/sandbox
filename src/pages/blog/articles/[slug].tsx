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
import { useEffect, useState } from "react";

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
  const router = useRouter();
  const { slug } = router.query;
  const [updoots, setUpdoots] = useState<number>();
  const [isUpdoot, setIsUpdoot] = useState<boolean>(false);
  const articleDynamicMeta = trpc.useQuery(
    ["article.getArticleDynamicMeta", { slug: slug?.toString() }],
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      onSuccess(data) {
        if (!data) return;
        setUpdoots(data.updoots);
      },
    }
  );

  const isUpdooted = trpc.useQuery(
    ["articleUser.fetchUserUpdoot", { slug: slug?.toString() }],
    {
      cacheTime: Infinity,
      staleTime: Infinity,
      onSuccess: (data) => {
        if (data) setIsUpdoot(data);
      },
    }
  );
  const { mutate: addUpdoot } = trpc.useMutation(["articleUser.addUpdoot"], {
    onSuccess: (data) => {
      setUpdoots((prev) => {
        if (typeof prev === "number") return prev + 1;
        return undefined;
      });
      setIsUpdoot(true);
    },
    onError(error) {
      console.error(error);
      if (error.data?.httpStatus === 401) {
        alert("You need to login");
        router.push("/");
      }
    },
  });

  const { mutate: removeUpdoot } = trpc.useMutation(
    ["articleUser.removeUpdoot"],
    {
      onSuccess: (data) => {
        setUpdoots((prev) => {
          if (typeof prev === "number") return prev - 1;
          return undefined;
        });
        setIsUpdoot(false);
      },
      onError(error) {
        console.error(error);
        if (error.data?.httpStatus === 401) {
          alert("You need to login");
          router.push("/");
        }
      },
    }
  );

  const handleChange = () => {
    if (!slug) return;
    if (!isUpdoot) {
      addUpdoot({ slug: slug.toString() });
    } else {
      removeUpdoot({ slug: slug.toString() });
    }
  };

  return (
    <>
      <Head>
        <title>{article.meta.title}</title>
      </Head>
      <input type="checkbox" onChange={handleChange} checked={isUpdoot} />
      <h1>{article.meta.title}</h1>
      <p>{articleDynamicMeta.data?.views} views</p>
      <p>{updoots} updoots</p>
      <p>{article.meta.readingTime}</p>
      <MDXRemote {...article.source} components={{ Image }} />
    </>
  );
};

export default ArticlePage;

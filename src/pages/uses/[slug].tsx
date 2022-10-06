import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Base from "@/src/components/Base";
import {
  getAllUsesSlugs,
  getOneUse,
  UseMeta,
} from "@/src/server/services/uses";

interface MDXUse {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: UseMeta;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllUsesSlugs().map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = await getOneUse(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { use: { source: mdxSource, meta } } };
};

const SnippetPage: NextPage<{ use: MDXUse }> = ({ use }) => {
  const { slug } = useRouter().query;
  return (
    <Base>
      <h1>{use.meta.title}</h1>
      <p>{use.meta.description}</p>
      <MDXRemote {...use.source} components={{ Image }} />
    </Base>
  );
};

export default SnippetPage;

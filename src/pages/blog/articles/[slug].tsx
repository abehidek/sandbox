import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import "highlight.js/styles/atom-one-dark.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import ViewCounterComponent from "@/src/components/ViewCounter";
import Base from "@/src/components/Base";
import Giscus from "@giscus/react";
import { allArticles, Article } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allArticles.map((article) => article.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const article = allArticles.find((article) => article.slug === slug);
  return { props: { article } };
};

const ArticlePage: NextPage<{ article: Article }> = ({ article }) => {
  const { slug } = useRouter().query;
  const MDXContent = useMDXComponent(article.body.code);

  return (
    <Base>
      <ViewCounterComponent slug={slug} route="article.getViews" />
      {/* <MDXRemote {...article.source} components={{ Image }} /> */}
      <MDXContent components={{ Image }} />
      <Giscus
        id="comments"
        repo="abehidek/blog"
        repoId="R_kgDOHFmzhw"
        category="Articles"
        categoryId="DIC_kwDOHFmzh84CRygt"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    </Base>
  );
};

export default ArticlePage;

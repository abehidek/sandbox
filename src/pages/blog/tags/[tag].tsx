import ArticlesComponent from "@/src/components/Articles";
import { ArticleMeta, getAllArticles } from "@/src/server/services";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();
  const tags = new Set(articles.map(article => article.meta.tags).flat());
  const paths = Array.from(tags).map(tag => ({ params: { tag: tag } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as { tag: string };
  const articles = getAllArticles().filter(article => article.meta.tags.includes(tag));

  return { props: { tag, articles: articles.map(article => article.meta) } };
};

interface TagPageProps {
  tag: string;
  articles: ArticleMeta[]
}

const TagPage: NextPage<TagPageProps> = ({ articles, tag }) => {
  console.log(articles)
  return (
    <>
      <main>
        <h1>Tag: {tag}</h1>
        <ArticlesComponent articles={articles} />
      </main>
    </>
  );
};

export default TagPage;

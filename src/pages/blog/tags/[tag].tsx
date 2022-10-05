import Base from "@/src/components/Base";
import ListArticlesComponent from "@/src/components/ListArticles";
import { ArticleMeta, getAllArticles } from "@/src/server/services/articles";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();
  const tags = new Set(articles.map((article) => article.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { tag: tag } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as { tag: string };
  const allArticles = await getAllArticles();
  const allArticlesFromTag = allArticles.filter((article) =>
    article.meta.tags.includes(tag)
  );

  return {
    props: {
      tag,
      allArticlesMeta: allArticlesFromTag.map((article) => article.meta),
    },
  };
};

interface TagPageProps {
  tag: string;
  allArticlesMeta: ArticleMeta[];
}

const TagPage: NextPage<TagPageProps> = ({ allArticlesMeta, tag }) => {
  return (
    <Base>
      <h1>Tag: {tag}</h1>
      <ListArticlesComponent allArticlesMeta={allArticlesMeta} />
    </Base>
  );
};

export default TagPage;

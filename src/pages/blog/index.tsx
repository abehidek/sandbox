import { NextPage } from "next";
import ListArticlesComponent from "@/src/components/ListArticles";
import Base from "@/src/components/Base";
import {
  getAllArticlesMeta,
  ArticleMeta,
} from "@/src/server/services/articles";

const BlogPage: NextPage<{
  allArticlesMeta: ArticleMeta[];
}> = ({ allArticlesMeta }) => {
  return (
    <Base>
      <h1>Blog Articles</h1>
      <ListArticlesComponent allArticlesMeta={allArticlesMeta} />
    </Base>
  );
};

export async function getStaticProps() {
  const allArticlesMeta = getAllArticlesMeta();
  return { props: { allArticlesMeta }, revalidate: 30 };
}

export default BlogPage;

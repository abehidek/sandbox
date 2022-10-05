import { NextPage } from "next";
import { getAllArticles, ArticleMeta } from "@/src/server/services/articles";
import ListArticlesComponent from "@/src/components/ListArticles";

const BlogPage: NextPage<{ allArticlesMeta: ArticleMeta[] }> = ({
  allArticlesMeta,
}) => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ListArticlesComponent allArticlesMeta={allArticlesMeta} />
    </div>
  );
};

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const allArticlesMeta = await Promise.all(
    allArticles.map((article) => article.meta)
  );

  return { props: { allArticlesMeta }, revalidate: 30 };
}

export default BlogPage;

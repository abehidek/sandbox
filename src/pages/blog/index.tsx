import { NextPage } from "next";
import { getAllArticles, ArticleMeta } from "@/src/server/services/articles";
import ArticlesComponent from "@/src/components/Articles";

const BlogPage: NextPage<{ allArticlesMeta: ArticleMeta[] }> = ({
  allArticlesMeta,
}) => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ArticlesComponent allArticlesMeta={allArticlesMeta} />
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

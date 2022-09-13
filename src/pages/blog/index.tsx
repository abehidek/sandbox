import { NextPage } from "next"
import { getAllArticles, ArticleMeta } from "@/src/server/services";
import ArticlesComponent from "@/src/components/Articles";

const BlogPage: NextPage<{ articles: ArticleMeta[] }> = ({ articles }) => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ArticlesComponent articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const allArticles = await getAllArticles();
  const articles = await Promise.all(allArticles.map(post => post.meta));

  return { props: { articles }, revalidate: 30, };
}

export default BlogPage;
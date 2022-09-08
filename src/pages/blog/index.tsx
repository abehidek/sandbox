import { NextPage } from "next"
import { getAllArticles, ArticleMeta } from "@/src/server/services";
import Link from "next/link";
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
  const articles = getAllArticles().map(post => post.meta);

  return { props: { articles } };
}

export default BlogPage;
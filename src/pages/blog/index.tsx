import { NextPage } from "next"
import { getAllArticles, ArticleMeta } from "@/src/server/static";
import Link from "next/link";

const BlogPage: NextPage<{ articles: ArticleMeta[] }> = ({ articles }) => {
  return (
    <div>
      <h1>Blog Articles</h1>
      <Articles articles={articles} />
    </div>
  );
}

export async function getStaticProps() {
  const articles = getAllArticles().map(post => post.meta);

  return { props: { articles } };
}

function Articles({ articles }: { articles: ArticleMeta[] }) {
  return (
    <ul>
    {articles.map((article) => {
      return (
        <li key={article.slug}>
          <div>
            <Link href={`/blog/articles/${article.slug}`}>{article.title}</Link>
          </div>
          <p>{article.excerpt}</p>
          <p>{article.date}</p>
          <p>
            {article.tags.map(tag => <Link key={tag} href={`/blog/tags/${tag}`}>{tag}</Link>)}
          </p>
        </li>
      )
    })}
    </ul>
  )
}

export default BlogPage;
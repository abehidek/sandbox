import Link from "next/link"
import { ArticleMeta } from "../server/services"

export default function ArticlesComponent({ articles }: { articles: ArticleMeta[] }) {
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
            <p>views: {article.views}</p>
          </li>
        );
      })}
    </ul>
  )
}
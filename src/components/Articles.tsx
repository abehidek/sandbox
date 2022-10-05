import Link from "next/link";
import { ArticleMeta } from "@/src/server/services/articles";

export default function ArticlesComponent({
  allArticlesMeta: articles,
}: {
  allArticlesMeta: ArticleMeta[];
}) {
  return (
    <ul>
      {articles.map((article) => {
        return (
          <li key={article.slug}>
            <div>
              <Link href={`/blog/articles/${article.slug}`}>
                {article.title}
              </Link>
            </div>
            <p>{article.excerpt}</p>
            <p>{article.date}</p>
            <p>
              {article.tags.map((tag) => (
                <Link key={tag} href={`/blog/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </p>
            <p>reading time {article.readingTime}</p>
            <p>views: {article.views}</p>
          </li>
        );
      })}
    </ul>
  );
}

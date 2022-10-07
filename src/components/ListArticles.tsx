import Link from "next/link";
import { ArticleMeta } from "@/src/server/services/articles";
import { format, parseISO, parse } from "date-fns";

export default function ListArticlesComponent({
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
              <Link href={article.url}>{article.title}</Link>
            </div>
            <p>{article.excerpt}</p>
            <p>{article.date}</p>
            <p>{format(parseISO(article.date), "LLLL d, yyyy")}</p>
            {/* <p>{format(article.date, "LLLL d, yyyy")}</p> */}
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

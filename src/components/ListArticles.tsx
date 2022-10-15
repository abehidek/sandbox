import Link from "next/link";
import { ArticleMeta } from "@/src/server/services/articles";
import { format, parseISO, parse } from "date-fns";

export default function ListArticlesComponent({
  allArticlesMeta: articles,
}: {
  allArticlesMeta: ArticleMeta[];
}) {
  return (
    <ul className="flex flex-col gap-4">
      {articles.map((article) => {
        return (
          <li key={article.slug}>
            <div>
              <div className="flex justify-between">
                <h2 className="font-bold">
                  <Link href={article.url}>{article.title}</Link>
                </h2>
                <p>{format(parseISO(article.date), "LLLL d, yyyy")}</p>
              </div>

              <div>
                <span className="font-semibold">tags: </span>
                {article.tags.map((tag) => (
                  <>
                    <Link key={tag} href={`/blog/tags/${tag}`}>
                      {tag}
                    </Link>{" "}
                  </>
                ))}
              </div>
              <p>{article.excerpt}</p>
              <div className="flex justify-between">
                <p>reading time {article.readingTime}</p>
                <p>views: {article.views}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

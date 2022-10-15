import { format, parseISO } from "date-fns";
import Link from "next/link";
import { SnippetMeta } from "../server/services/snippets";

export default function ListSnippetsComponent({
  allSnippetsMeta,
}: {
  allSnippetsMeta: SnippetMeta[];
}) {
  return (
    <ul>
      {allSnippetsMeta.map((snippet) => {
        return (
          <li key={snippet.slug}>
            <div>
              <Link href={snippet.url}>{snippet.title}</Link>
            </div>
            <p>{snippet.description}</p>
            <p>{format(parseISO(snippet.date), "LLLL d, yyyy")}</p>
            <p>views: {snippet.views}</p>
          </li>
        );
      })}
    </ul>
  );
}

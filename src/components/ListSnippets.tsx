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
              <Link href={`/snippets/${snippet.slug}`}>{snippet.title}</Link>
            </div>
            <p>{snippet.description}</p>
            <p>{snippet.date}</p>
            <p>views: {snippet.views}</p>
          </li>
        );
      })}
    </ul>
  );
}

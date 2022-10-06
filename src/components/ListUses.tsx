import Link from "next/link";
import { UseMeta } from "../server/services/uses";

export default function ListUsesComponent({
  allUsesMeta,
}: {
  allUsesMeta: UseMeta[];
}) {
  return (
    <ul>
      {allUsesMeta.map((use) => {
        return (
          <li key={use.slug}>
            <div>
              <Link href={`/uses/${use.slug}`}>{use.title}</Link>
            </div>
            <p>{use.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

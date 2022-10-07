import Link from "next/link";
import { UseMeta } from "../pages/uses";

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
              <Link href={use.url}>{use.title}</Link>
            </div>
            <p>{use.description}</p>
          </li>
        );
      })}
    </ul>
  );
}

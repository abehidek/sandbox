import Base from "@/src/components/Base";
import { getAllArticlesMeta } from "@/src/server/services/articles";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface TagMeta {
  tag: string;
  occurences: number;
}
export const getStaticProps: GetStaticProps = async () => {
  const allArticles = await getAllArticlesMeta();
  const tags = allArticles.map((article) => article.tags).flat();

  const tagsOccurencesMap: { [key: string]: number } = tags.reduce(
    (acc: any, curr: any) => {
      acc[curr] ??= 0;
      acc[curr]++;
      return acc;
    },
    {}
  );

  const tagsMeta: TagMeta[] = Object.entries(tagsOccurencesMap).map(
    ([tag, occurences]) => ({ tag, occurences })
  );

  return { props: { tagsMeta } };
};

interface TagPageProps {
  tagsMeta: TagMeta[];
}

const AllTagsPage: NextPage<TagPageProps> = ({ tagsMeta }) => {
  return (
    <Base>
      <h1>All Tags</h1>
      <ul>
        {tagsMeta.map((tag) => (
          <li key={tag.tag}>
            <Link href={`/blog/tags/${tag.tag}`}>{tag.tag}</Link>
            <p>Ocurrences: {tag.occurences}</p>
          </li>
        ))}
      </ul>
    </Base>
  );
};

export default AllTagsPage;

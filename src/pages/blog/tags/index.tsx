import ArticlesComponent from "@/src/components/Articles";
import { ArticleMeta, getAllArticles } from "@/src/server/static";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

interface TagMeta {
  tag: string;
  occurences: number;
};
export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllArticles().map(article => article.meta.tags).flat();

  const tagsOccurencesMap: { [key: string]: number  } = tags.reduce((acc: any, curr: any) => {
    acc[curr] ??= 0;
    acc[curr]++;
    
    return acc;
  }, {});

  const tagsMeta: TagMeta[] =  Object.entries(tagsOccurencesMap).map(([tag, occurences]) => ({ tag, occurences }))

  return { props: { tagsMeta } };
};

interface TagPageProps {
  tagsMeta: TagMeta[];
};

const AllTagsPage: NextPage<TagPageProps> = ({ tagsMeta }) => {
  console.log(tagsMeta)
  return (
    <>
      <main>
        <h1>All Tags</h1>
        <ul>
          {tagsMeta.map(tag => (
            <li key={tag.tag}>
              <Link href={`/blog/tags/${tag.tag}`}>{tag.tag}</Link>
              <p>Ocurrences: {tag.occurences}</p>
            </li>
          ))}
        </ul>
        
      </main>
    </>
  );
};

export default AllTagsPage;

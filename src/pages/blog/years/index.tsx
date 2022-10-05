import { getAllArticles } from "@/src/server/services/articles";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import moment from "moment";
import Base from "@/src/components/Base";

interface YearMeta {
  year: string;
  occurences: number;
}
export const getStaticProps: GetStaticProps = async () => {
  const allArticles = await getAllArticles();
  const years = allArticles.map((article) =>
    moment(article.meta.date, "MMMM Do, YYYY").format("YYYY")
  );

  const yearOccurencesMap: { [key: string]: number } = years.reduce(
    (acc: any, curr: any) => {
      acc[curr] ??= 0;
      acc[curr]++;
      return acc;
    },
    {}
  );

  const yearsMeta: YearMeta[] = Object.entries(yearOccurencesMap).map(
    ([year, occurences]) => ({ year, occurences })
  );

  return { props: { yearsMeta } };
};

interface YearsPageProps {
  yearsMeta: YearMeta[];
}

const YearsPage: NextPage<YearsPageProps> = ({ yearsMeta }) => {
  console.log(yearsMeta);
  return (
    <Base>
      <h1>All Years</h1>
      {yearsMeta.map((year) => (
        <li key={year.year}>
          <Link href={`/blog/years/${year.year}`}>{year.year}</Link>
          <p>Ocurrences: {year.occurences}</p>
        </li>
      ))}
    </Base>
  );
};

export default YearsPage;

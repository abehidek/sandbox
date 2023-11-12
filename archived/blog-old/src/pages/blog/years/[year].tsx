import Base from "@/src/components/Base";
import ListArticlesComponent from "@/src/components/ListArticles";
import {
  ArticleMeta,
  getAllArticlesMeta,
} from "@/src/server/services/articles";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticles = await getAllArticlesMeta();
  const years = new Set(
    allArticles.map((article) =>
      new Date(article.date).getFullYear().toString()
    )
  );
  const paths = Array.from(years).map((year) => ({ params: { year: year } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { year } = params as { year: string };
  const allArticles = await getAllArticlesMeta();
  const allArticlesFromTag = allArticles.filter(
    (article) => new Date(article.date).getFullYear().toString() === year
  );

  return {
    props: {
      year,
      allArticlesMeta: allArticlesFromTag,
    },
  };
};

interface YearPageProps {
  year: string;
  allArticlesMeta: ArticleMeta[];
}

const YearPage: NextPage<YearPageProps> = ({ allArticlesMeta, year }) => {
  return (
    <Base>
      <h1>Year: {year}</h1>
      <ListArticlesComponent allArticlesMeta={allArticlesMeta} />
    </Base>
  );
};

export default YearPage;

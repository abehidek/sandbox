import ListArticlesComponent from "@/src/components/ListArticles";
import { ArticleMeta, getAllArticles } from "@/src/server/services/articles";
import moment from "moment";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticles();
  const years = new Set(
    articles.map((article) =>
      moment(article.meta.date, "MMMM Do, YYYY").format("YYYY")
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
  const allArticles = await getAllArticles();
  const allArticlesFromTag = allArticles.filter((article) =>
    article.meta.date.includes(year)
  );

  return {
    props: {
      year,
      allArticlesMeta: allArticlesFromTag.map((article) => article.meta),
    },
  };
};

interface YearPageProps {
  year: string;
  allArticlesMeta: ArticleMeta[];
}

const YearPage: NextPage<YearPageProps> = ({ allArticlesMeta, year }) => {
  return (
    <>
      <main>
        <h1>Year: {year}</h1>
        <ListArticlesComponent allArticlesMeta={allArticlesMeta} />
      </main>
    </>
  );
};

export default YearPage;

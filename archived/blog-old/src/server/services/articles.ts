import { prisma } from "../db/client";
import { allArticles, Article } from "contentlayer/generated";

export const getOneArticleViews = async (slug: string) => {
  const articleViews = await prisma.articleViews.upsert({
    where: { slug },
    update: {},
    create: {
      slug,
      views: 0,
    },
  });
  return articleViews;
};

export const upsertArticleViewCount = async (slug: string) => {
  const article = await prisma.articleViews.upsert({
    where: { slug },
    update: {
      views: { increment: 1 },
    },
    create: {
      slug,
      views: 1,
    },
  });
  return article;
};

export type ArticleMeta = Omit<Article, "body">;

export const getAllArticlesMeta = async (): Promise<ArticleMeta[]> => {
  return Promise.all(
    allArticles.map(async (article) => {
      article.views = (await getOneArticleViews(article.slug)).views;
      const { body: _, ...meta } = article;
      return meta;
    })
  );
};

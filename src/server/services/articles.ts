import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { prisma } from "../db/client";
import readingTime from "reading-time";
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

export type ArticleFull = Article & {
  views: number;
  readingTime: string;
  slug: string;
};

export type ArticleMeta = Omit<ArticleFull, "body">;

export const getAllArticles = async (): Promise<ArticleFull[]> => {
  return await Promise.all(
    allArticles.map(async (article) => {
      const slug = path.parse(article._raw.sourceFileName).name;
      const { views } = await getOneArticleViews(slug);
      return {
        ...article,
        views,
        slug,
        readingTime: readingTime(article.body.raw).text,
      };
    })
  );
};

export const getAllArticlesMeta = async (): Promise<ArticleMeta[]> => {
  return await (
    await getAllArticles()
  ).map((article) => {
    const { body: _, ...meta } = article;
    return meta;
  });
};

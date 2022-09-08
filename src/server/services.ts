import path from "path";
import fs from "fs";
import matter from "gray-matter"
import { prisma } from "./db";

const ARTICLES_PATH = path.join(process.cwd(), "public");

export const getSlugs = (): string[] => {
  const filesPaths = fs.readdirSync(ARTICLES_PATH);
  const paths = filesPaths
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.md$/, ''));

  return paths.map((path) => {
    const parts = path.split("/");
    const fileName = parts[parts.length - 1] ?? "";
    const [slug, _ext] = fileName.split(".");
    return slug ?? "";
  })
}

export const getAllArticles = async () => {
  const allSlugs = getSlugs();

  const allArticles = await Promise.all(allSlugs.map(async slug => {
    return await getArticleFromSlug(slug)
  }));

  return allArticles.sort((a, b) => {
    if (a.meta.date > b.meta.date) return 1;
    if (a.meta.date < b.meta.date) return -1;
    return 0
  }).reverse();
}

export interface ArticleMeta {
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  date: string;
  views: number;
  updoots: number;
}

export interface Article {
  content: string;
  meta: ArticleMeta;
}

export const getArticleFromSlug = async (slug: string): Promise<Article> => {
  const articlePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { content, data } = matter(source);

  const { views, updoots } = await getArticleDbMeta(slug);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      views,
      updoots
    }
  }
}

export interface ArticleDbMeta {
  id: number;
  slug: string;
  views: number;
  updoots: number;
}

export const getArticleDbMeta = async (slug: string): Promise<ArticleDbMeta> => {
  const article = await prisma.article.upsert({
    where: { slug, },
    update: {},
    create: {
      slug,
      views: 0,
      updoots: 0
    },
  });
  return article;
}

export const upsertArticleViewCount = async (slug: string): Promise<number> => {
  const article = await prisma.article.upsert({
    where: { slug, },
    update: {
      views: { increment: 1 }
    },
    create: {
      slug,
      views: 1,
      updoots: 0
    },
  });
  return article.views;
}
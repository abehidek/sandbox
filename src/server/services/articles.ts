import path from "path";
import fs from "fs";
import matter from "gray-matter"
import { prisma } from "../db/client";
import readingTime from "reading-time";
import moment from "moment"

const ARTICLES_PATH = path.join(process.cwd(), "public/articles");

export const getAllArticlesSlugs = (): string[] => {
  const articlesPathFiles = fs.readdirSync(ARTICLES_PATH);
  const articlePaths = articlesPathFiles
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.md$/, ''));
  
  return articlePaths.map((articlePath) => {
    const parts = articlePath.split("/");
    const fileName = parts[parts.length - 1] ?? "";
    const [slug, _ext] = fileName.split(".");
    return slug ?? "";
  })
}

export type ArticleMeta = {
  slug: string; // each article is unique by the slug
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
  views: number; // dynamic data
  readingTime: string;

}

export type Article = {
  meta: ArticleMeta;
  content: string;
}

export const getOneArticleViews = async (slug: string) => {
  const articleViews = await prisma.articleViews.upsert({
    where: { slug, },
    update: {},
    create: {
      slug,
      views: 0,
    },
  });
  return articleViews;
}

export const getOneArticle = async (slug: string): Promise<Article> => {
  const isMDX = fs.existsSync(path.join(ARTICLES_PATH, `${slug}.mdx`))
  const articlePath = isMDX ? path.join(ARTICLES_PATH, `${slug}.mdx`) : path.join(ARTICLES_PATH, `${slug}.md`);
  const articleSource = fs.readFileSync(articlePath)
  const { content, data } = matter(articleSource);
  const { views } = await getOneArticleViews(slug);
  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      tags: (data.tags ?? []).sort(),
      date: moment((data.date ?? new Date()).toString()).format('MMMM Do, YYYY'),
      views,
      readingTime: readingTime(content).text
    }
  }
}

export const getAllArticles = async (): Promise<Article[]> => {
  const allArticlesSlugs = getAllArticlesSlugs();
  const allArticles = await Promise.all(allArticlesSlugs.map(async articleSlug => await getOneArticle(articleSlug)))

  return allArticles.sort((a, b) => {
    if (a.meta.date > b.meta.date) return 1;
    if (a.meta.date < b.meta.date) return -1;
    return 0
  }).reverse();
}

export const upsertArticleViewCount = async (slug: string) => {
  const article = await prisma.articleViews.upsert({
    where: { slug, },
    update: {
      views: { increment: 1 }
    },
    create: {
      slug,
      views: 1,
    },
  });
  return article;
}

import path from "path";
import fs from "fs";
import matter from "gray-matter"

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

export const getAllArticles = () => {
  return getSlugs().map(slug => getArticleFromSlug(slug)).sort((a, b) => {
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
}

export interface Article {
  content: string;
  meta: ArticleMeta;
}

export const getArticleFromSlug = (slug: string): Article => {
  const articlePath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString()
    }
  }
}
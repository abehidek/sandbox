import path from "path";
import fs from 'fs';
import { prisma } from "../db/client";
import matter from "gray-matter";

const SNIPPETS_PATH = path.join(process.cwd(), "content/snippets");

export const getAllSnippetsSlugs = (): string[] => {
  const snippetsPathFiles = fs.readdirSync(SNIPPETS_PATH);
  const snippetsPaths = snippetsPathFiles
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.md$/, ''));
  
  return snippetsPaths.map((snippetPath) => {
    const parts = snippetPath.split("/");
    const fileName = parts[parts.length - 1] ?? "";
    const [slug, _ext] = fileName.split(".");
    return slug ?? "";
  })
}

export type SnippetMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  views: number;
}

export type Snippet = {
  meta: SnippetMeta;
  content: string;
}

export const getOneSnippetViews = async (slug: string) => {
  const snippetViews = await prisma.snippetViews.upsert({
    where: { slug, },
    update: {},
    create: {
      slug,
      views: 0,
    },
  });
  return snippetViews;
}

export const getOneSnippet = async (slug: string): Promise<Snippet> => {
  const isMDX = fs.existsSync(path.join(SNIPPETS_PATH, `${slug}.mdx`))
  const snippetPath = isMDX ? path.join(SNIPPETS_PATH, `${slug}.mdx`) : path.join(SNIPPETS_PATH, `${slug}.md`);
  const snippetSource = fs.readFileSync(snippetPath)
  const { content, data } = matter(snippetSource);
  const { views } = await getOneSnippetViews(slug);
  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: (data.date ?? new Date()).toString(),
      views,
    }
  }
}

export const getAllSnippets = async (): Promise<Snippet[]> => {
  const allSnippetsSlugs = getAllSnippetsSlugs();
  const allSnippets = await Promise.all(allSnippetsSlugs.map(async snippetSlug => await getOneSnippet(snippetSlug)))

  return allSnippets.sort((a, b) => {
    if (a.meta.date > b.meta.date) return 1;
    if (a.meta.date < b.meta.date) return -1;
    return 0
  }).reverse();
}

export const upsertSnippetViewCount = async (slug: string) => {
  const snippet = await prisma.snippetViews.upsert({
    where: { slug, },
    update: {
      views: { increment: 1 }
    },
    create: {
      slug,
      views: 1,
    },
  });
  return snippet;
}


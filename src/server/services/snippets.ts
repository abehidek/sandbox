import { prisma } from "../db/client";
import { allSnippets, Snippet } from "contentlayer/generated";

export type SnippetMeta = Omit<Snippet, "body">;

export const getAllSnippetsMeta = async (): Promise<SnippetMeta[]> => {
  return Promise.all(
    allSnippets.map(async (snippet) => {
      snippet.views = (await getOneSnippetViews(snippet.slug)).views;
      const { body: _, ...meta } = snippet;
      return meta;
    })
  );
};

export const getOneSnippetViews = async (slug: string) => {
  const snippetViews = await prisma.snippetViews.upsert({
    where: { slug },
    update: {},
    create: {
      slug,
      views: 0,
    },
  });
  return snippetViews;
};

export const upsertSnippetViewCount = async (slug: string) => {
  const snippet = await prisma.snippetViews.upsert({
    where: { slug },
    update: {
      views: { increment: 1 },
    },
    create: {
      slug,
      views: 1,
    },
  });
  return snippet;
};

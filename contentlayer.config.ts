import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import path from "path";
import readingTime from "reading-time";
import { getOneArticleViews } from "./src/server/services/articles";
import { getOneSnippetViews } from "./src/server/services/snippets";

export const Use = defineDocumentType(() => ({
  name: "Use",
  contentType: "mdx",
  filePathPattern: `uses/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (use) => `/${use._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (use) => path.parse(use._raw.sourceFileName).name,
    },
  },
}));

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  contentType: "mdx",
  filePathPattern: `uses/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (snippet) => `/${snippet._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (snippet) => path.parse(snippet._raw.sourceFileName).name,
    },
    views: {
      type: "number",
      resolve: async (snippet) => {
        return await (
          await getOneSnippetViews(path.parse(snippet._raw.sourceFileName).name)
        ).views;
      },
    },
  },
}));

export const Article = defineDocumentType(() => ({
  name: "Article",
  contentType: "mdx",
  filePathPattern: `articles/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "The tags of the article",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "Is the post a draft?",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/blog/${article._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (article) => path.parse(article._raw.sourceFileName).name,
    },
    views: {
      type: "number",
      resolve: async (article) => {
        return await (
          await getOneArticleViews(path.parse(article._raw.sourceFileName).name)
        ).views;
      },
    },
    readingTime: {
      type: "string",
      resolve: (article) => readingTime(article.body.raw).text,
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [Article, Snippet, Use],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // meta,
      rehypeSlug,
      rehypeAccessibleEmojis,
      rehypeCodeTitles, // should always be before rehypePrism.
      rehypePrism,
      // rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        [
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    ],
  },
});

export default source;

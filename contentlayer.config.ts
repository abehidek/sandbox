import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

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
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

const source = makeSource({
  contentDirPath: "content",
  documentTypes: [Article],
  mdx: {
    // remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // meta,
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeHighlight,
      // rehypeCodeTitles,
      // highlight,
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

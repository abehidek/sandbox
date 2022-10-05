import { createProtectedRouter, createRouter } from "./context";
import { z } from "zod";
import { upsertSnippetViewCount } from "../services/snippets";

export const snippetRouter = createRouter()
  .query("getViews", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input.slug) return null
      const snippet = await upsertSnippetViewCount(input.slug)
      return {
        views: snippet.views,
      }
    }
  })

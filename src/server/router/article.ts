import { createRouter } from "./context";
import { z } from "zod";
import { upsertArticleViewCount } from "../services/articles";

export const articleRouter = createRouter()
  .query("getView", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input.slug) return null
      return await upsertArticleViewCount(input.slug);
    },
  })

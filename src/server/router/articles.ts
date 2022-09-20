import { createRouter } from "./context";
import { z } from "zod";
import { upsertArticleViewCount } from "../services";

export const articlesRouter = createRouter()
  .query("get-view", {
    input: z.string().nullish(),
    async resolve({ input }) {
      if (input == undefined) return { content: 'undefined input' }

      try {
        const articleView = await upsertArticleViewCount(input);
        return { content: articleView }
      } catch (error) {
        return { content: error as string }
      }
    },
  });
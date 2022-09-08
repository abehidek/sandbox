import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db";
import { upsertArticleViewCount } from "../services";

export const articlesRouter = createRouter()
  .query("add-view", {
    resolve() {
      return {
        text: `Adding view`,
      };
    },
  })
  .query("get-view", {
    input: z.string().nullish(),
    async resolve({ input }) {
      if (input == undefined) return { message: 'undefined input' }

      const articleView = await upsertArticleViewCount(input);

      return {
        articleView
      };
    },
  });
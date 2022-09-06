import { createRouter } from "./context";
import { z } from "zod";
import { prisma } from "../db";

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

      const article = await prisma.article.upsert({
        where: { slug: input, },
        update: {
          views: { increment: 1 }
        },
        create: {
          slug: input,
          views: 1,
          updoots: 0
        },
      });

      console.log(article)

      return {
        article
      };
    },
  });
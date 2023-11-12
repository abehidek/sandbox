import { createProtectedRouter, createRouter } from "./context";
import { z } from "zod";
import { upsertArticleViewCount } from "../services/articles";
import { TRPCError } from "@trpc/server";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime";

export const articleRouter = createRouter()
  .query("getViews", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input.slug) return null
      const article = await upsertArticleViewCount(input.slug)
      return {
        views: article.views,
      }
    }
  })

import { createProtectedRouter, createRouter } from "./context";
import { z } from "zod";
import { decrementArticleUpdoot, fetchArticleUpdoots, fetchArticleUserUpdoot, getOneArticleDynamicMeta, incrementArticleUpdoot, upsertArticleViewCount } from "../services/articles";
import { TRPCError } from "@trpc/server";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime";

export const articleRouter = createRouter()
  .query("getArticleDynamicMeta", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ input }) {
      if (!input.slug) return null
      const article = await upsertArticleViewCount(input.slug)
      const updoots = await fetchArticleUpdoots(article.id)
      return {
        views: article.views,
        updoots
      }
    }
  })

export const articleUserRouter = createProtectedRouter()
  .query("fetchUserUpdoot", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ ctx, input }) {
      if (!input.slug) return null
      if(await fetchArticleUserUpdoot(input.slug, ctx.session.user.id )) return true
      else return false
    }
  })
  .mutation("addUpdoot", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ ctx, input }) {
      if (!input.slug) return null
      console.log(ctx.session.user.id)
      console.log(input.slug)
      try {
        return await incrementArticleUpdoot(input.slug, ctx.session.user.id)  
      } catch (error: any) {
        if (error.code === "P2002") {
          throw new TRPCError({
            code: "CONFLICT",
            message: 'User already has given updoot to this article'
          })
        } 
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something has broken'
        })
      }
    }
  })
  .mutation("removeUpdoot", {
    input: z.object({
      slug: z.string().nullish(),
    }),
    async resolve({ ctx, input }) {
      if (!input.slug) return null
      console.log(ctx.session.user.id)
      console.log(input.slug)
      try {
        return await decrementArticleUpdoot(input.slug, ctx.session.user.id)  
      } catch (error: any) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Something has broken'
        })
      }
    }
  })

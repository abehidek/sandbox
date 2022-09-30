import { createProtectedRouter, createRouter } from "./context";
import { z } from "zod";

export const userRouter = createProtectedRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .mutation("changePassword", {
    input: z.object({ password: z.string() }),
    async resolve({ ctx, input }) {
      console.log(
        ctx.session.user.name +
          " is doing a request to change password, new password: " +
          input.password
      );

      return await ctx.prisma.user.update({
        where: {
          id: ctx.session.user.id,
        },
        data: {
          password: input.password,
        },
      });
    },
  });

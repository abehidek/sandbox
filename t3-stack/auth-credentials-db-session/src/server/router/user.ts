import { createProtectedRouter, createRouter } from "./context";
import { z } from "zod";

export const userRouter = createProtectedRouter().mutation("changePassword", {
  input: z.object({ password: z.string().min(8) }),
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

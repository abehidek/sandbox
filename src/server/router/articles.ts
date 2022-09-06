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
  async resolve() {
    const users = await prisma.user.findMany();
    return {
      text: `Getting view`,
      users
    };
  },
});
import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get("/users/count", async () => {
    const count = await prisma.user.count();
    return { count };
  });
}

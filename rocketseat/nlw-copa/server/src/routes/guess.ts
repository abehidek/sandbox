import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";

export async function guessRoutes(fastify: FastifyInstance) {
  fastify.get("/guesses/count", async () => {
    const count = await prisma.guess.count();
    return { count };
  });
}

import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { authenticate } from "../plugins/authenticate";

function subtractHours(date: Date, hours: number) {
  date.setHours(date.getHours() - hours)
  return date;
}

export async function guessRoutes(fastify: FastifyInstance) {
  fastify.get("/guesses/count", async () => {
    const count = await prisma.guess.count();
    return { count };
  });

  fastify.post('/pools/:poolId/games/:gameId/guesses', {
    onRequest: [authenticate]
  }, async (req, reply) => {
    const createGuessParams = z.object({
      poolId: z.string(),
      gameId: z.string()
    })

    const createGuessBody = z.object({
      firstTeamPoints: z.number(),
      secondTeamPoints: z.number()
    })

    const { poolId, gameId } = createGuessParams.parse(req.params)
    const { firstTeamPoints, secondTeamPoints} = createGuessBody.parse(req.body)

    const participant = await prisma.participant.findUnique({
      where: {
        userId_poolId: {
          poolId,
          userId: req.user.sub
        }
      }
    })

    if (!participant) return reply.status(403).send({ message: "You are not allowed to create a guess inside this pool." })

    const guess = await prisma.guess.findUnique({
      where: {
        participantId_gameId: {
          gameId,
          participantId: participant.id
        }
      }
    })

    if (guess) return reply.status(403).send({ message: "You already sent a guess to this game on this pool." })

    const game = await prisma.game.findUnique({
      where: { id: gameId}
    })

    if (!game) return reply.status(404).send({ message: "Game not found." })

    if (subtractHours(game.date, 2) < new Date()) return reply.status(403).send({ message: "You cannot send guesses after 2 hours before the game date." })

    await prisma.guess.create({
      data: {
        gameId,
        participantId: participant.id,
        firstTeamPoints,
        secondTeamPoints
      }
    })

    return reply.status(201).send()
  })
}

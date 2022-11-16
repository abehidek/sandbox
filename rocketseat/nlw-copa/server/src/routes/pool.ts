import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import { prisma } from "../lib/prisma";
import { FastifyInstance } from "fastify";
import { authenticate } from "../plugins/authenticate";

export async function poolRoutes(fastify: FastifyInstance) {
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();
    return { count };
  });

  fastify.post("/pools", async (req, reply) => {
    const createPoolBody = z.object({
      title: z.string(),
    });

    const { title } = createPoolBody.parse(req.body);

    const generate = new ShortUniqueId({ length: 6 });
    const code = String(generate()).toUpperCase();

    try {
      await req.jwtVerify();
      await prisma.pool.create({
        data: {
          title,
          code,
          ownerId: req.user.sub,

          participants: {
            create: {
              userId: req.user.sub,
            },
          },
        },
      });
    } catch {
      await prisma.pool.create({
        data: {
          title,
          code,
        },
      });
    }

    return reply.status(201).send({ code });
  });

  fastify.post(
    "/pools/join",
    { onRequest: [authenticate] },
    async (req, reply) => {
      const joinPoolBody = z.object({
        code: z.string(),
      });

      const { code } = joinPoolBody.parse(req.body);

      const pool = await prisma.pool.findUnique({
        where: {
          code,
        },
        include: {
          participants: {
            where: {
              userId: req.user.sub,
            },
          },
        },
      });

      if (!pool) {
        return reply.status(400).send({
          message: "Pool not found.",
        });
      }

      if (pool.participants.length > 0) {
        return reply.status(400).send({
          message: "You already joined this pool.",
        });
      }

      if (!pool.ownerId) {
        await prisma.pool.update({
          where: { id: pool.id },
          data: {
            ownerId: req.user.sub,
          },
        });
      }

      await prisma.participant.create({
        data: {
          poolId: pool.id,
          userId: req.user.sub,
        },
      });

      return reply.status(201).send();
    }
  );

  fastify.get("/pools", { onRequest: [authenticate] }, async (req, reply) => {
    const pools = await prisma.pool.findMany({
      where: {
        participants: {
          some: { userId: req.user.sub },
        },
      },
      include: {
        _count: {
          select: {
            participants: true,
          },
        },
        participants: {
          select: {
            id: true,
            user: {
              select: {
                avatarUrl: true,
              },
            },
          },
          take: 4,
        },
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return { pools };
  });

  fastify.get("/pools/:id", { onRequest: [authenticate] }, async (req) => {
    const getPoolParams = z.object({
      id: z.string(),
    });

    const { id } = getPoolParams.parse(req.params);

    const pool = await prisma.pool.findUnique({
      where: {
        id,
      },
      include: {
        _count: {
          select: {
            participants: true,
          },
        },
        participants: {
          select: {
            id: true,
            user: {
              select: {
                avatarUrl: true,
              },
            },
          },
          take: 4,
        },
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return { pool };
  });
}

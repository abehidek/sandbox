// src/server/db/client.ts
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../../generated/client/deno/edge.ts";

export const prisma = new PrismaClient({
  // log: ["query"],
});

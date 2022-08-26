// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { anotherExampleRouter, exampleRouter } from "./example";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("example.", anotherExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;

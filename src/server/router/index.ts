// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { anotherExampleRouter, exampleRouter } from "./example";
import { articlesRouter } from "./articles";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("example.", anotherExampleRouter)
  .merge("articles.", articlesRouter)

// export type definition of API
export type AppRouter = typeof appRouter;

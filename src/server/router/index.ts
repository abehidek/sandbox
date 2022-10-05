// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { articleRouter } from "./article";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("article.", articleRouter);
  // .merge("articleUser.", articleUserRouter)

// export type definition of API
export type AppRouter = typeof appRouter;

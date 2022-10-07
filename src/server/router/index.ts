// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { articleRouter } from "./article";
import { snippetRouter } from "./snippet";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("article.", articleRouter)
  .merge("snippet.", snippetRouter);
  // .merge("articleUser.", articleUserRouter)

// export type definition of API
export type AppRouter = typeof appRouter;

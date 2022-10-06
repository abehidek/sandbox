# Abe Hidek's Blog

## Development

Refactor the entire code (again) but using mdx and without fetching for external sources (such as another github repo), so this means switching the current model (a separate repo for blog posts) to a new model (one repo with all posts + mdx), still using github as a cms, so ISR (Incremental Static Regeneration) dont need to be used anymore, only SSG with some dynamic data fetching (such as view counter).

Another interesting feature is using tags (this can be accomplished reading from the markdown frontmatter I guess?) and provide a way to search by that. An idea is to create a /tag page that has all tags, and each tag has it's own font-size depending on the number of occurences. Same for year/date btw.

- [ ] years page

  - [x] Functionality
  - [ ] Styling

- [ ] tags page

  - [x] Functionality
  - [ ] Styling

- [ ] Dark/Light Mode Switch
- [ ] A creative 3D animation to show off
- [ ] Animation and smooth page transitions
- [ ] Subscribe to a newsletter
- [x] A guestbook is welcome too, we can use NextAuth to verify someone.
- [x] View count for each post.
- [ ] Page about my dev env.
- [ ] Integrate all info in one page.
- [ ] Rename this repo to website name (abehidek.me).
- [x] Persist auth and make it possible to a user like the post
- [ ] Dashboard page that consumes some realtime API to provide an useful info
  - [ ] Integration with wakatime.
  - [ ] Integration with Github.
  - [ ] Integration with twitter.
  - [ ] Integration with spotify.
- [ ] Code Snippets
  - [x] Functionality
  - [ ] Styling
- [ ] My Projects page
  - [x] Functionality
  - [ ] Styling
- [x] RSS feed
- [ ] Sitemap
- [ ] Navbar
  - [x] Functionality
  - [ ] Mobile menu
  - [ ] Styling
- [x] Read time to each blog article

## Useful resources

Here are some resources that we commonly refer to:

- [Protecting routes with Next-Auth.js](https://next-auth.js.org/configuration/nextjs#unstable_getserversession)
- [Providing precompiled bins for NixOS](https://github.com/prisma/prisma/issues/3026)
- [MDX](https://mdxjs.com/)
- https://www.youtube.com/watch?v=dsCfi0yRr1w
- https://www.youtube.com/watch?v=J_0SBJMxmcw
- https://www.youtube.com/watch?v=WCGopHwXnic
- https://www.youtube.com/watch?v=iW39Merz0zE
- https://www.youtube.com/watch?v=xXQsF0q8KUg
- https://www.youtube.com/watch?v=h6wBYWWdyYQ
- https://www.youtube.com/watch?v=syEWlxVFUrY <- With T3 Stack

## Stack

This is an app bootstrapped according to the [init.tips](https://init.tips) stack, also known as the T3-Stack.

### Why are there `.js` files in here?

As per [T3-Axiom #3](https://github.com/t3-oss/create-t3-app/tree/next#3-typesafety-isnt-optional), we take typesafety as a first class citizen. Unfortunately, not all frameworks and plugins support TypeScript which means some of the configuration files have to be `.js` files.

We try to emphasize that these files are javascript for a reason, by explicitly declaring its type (`cjs` or `mjs`) depending on what's supported by the library it is used by. Also, all the `js` files in this project are still typechecked using a `@ts-check` comment at the top.

### What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with the most basic configuration and then move on to more advanced configuration.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io) (using @next version? [see v10 docs here](https://alpha.trpc.io))

Also checkout these awesome tutorials on `create-t3-app`.

- [Build a Blog With the T3 Stack - tRPC, TypeScript, Next.js, Prisma & Zod](https://www.youtube.com/watch?v=syEWlxVFUrY)
- [Build a Live Chat Application with the T3 Stack - TypeScript, Tailwind, tRPC](https://www.youtube.com/watch?v=dXRRY37MPuk)
- [Build a full stack app with create-t3-app](https://www.nexxel.dev/blog/ct3a-guestbook)
- [A first look at create-t3-app](https://dev.to/ajcwebdev/a-first-look-at-create-t3-app-1i8f)

### How do I deploy this?

#### Vercel

We recommend deploying to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss). It makes it super easy to deploy NextJs apps.

- Push your code to a GitHub repository.
- Go to [Vercel](https://vercel.com/?utm_source=t3-oss&utm_campaign=oss) and sign up with GitHub.
- Create a Project and import the repository you pushed your code to.
- Add your environment variables.
- Click **Deploy**
- Now whenever you push a change to your repository, Vercel will automatically redeploy your website!

#### Docker

You can also dockerize this stack and deploy a container.

1. In your [next.config.mjs](./next.config.mjs), add the `output: "standalone"` option to your config.
2. Create a `.dockerignore` file with the following contents:
   <details>
   <summary>.dockerignore</summary>

   ```
   Dockerfile
   .dockerignore
   node_modules
   npm-debug.log
   README.md
   .next
   .git
   ```

  </details>

3. Create a `Dockerfile` with the following contents:
   <details>
   <summary>Dockerfile</summary>

   ```Dockerfile
   # Install dependencies only when needed
   FROM node:16-alpine AS deps
   # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
   RUN apk add --no-cache libc6-compat
   WORKDIR /app

   # Install dependencies based on the preferred package manager
   COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
   RUN \
      if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
      elif [ -f package-lock.json ]; then npm ci; \
      elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
      else echo "Lockfile not found." && exit 1; \
      fi


   # Rebuild the source code only when needed
   FROM node:16-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .

   # Next.js collects completely anonymous telemetry data about general usage.
   # Learn more here: https://nextjs.org/telemetry
   # Uncomment the following line in case you want to disable telemetry during the build.
   # ENV NEXT_TELEMETRY_DISABLED 1

   RUN yarn build

   # If using npm comment out above and use below instead
   # RUN npm run build

   # Production image, copy all the files and run next
   FROM node:16-alpine AS runner
   WORKDIR /app

   ENV NODE_ENV production
   # Uncomment the following line in case you want to disable telemetry during runtime.
   # ENV NEXT_TELEMETRY_DISABLED 1

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   # You only need to copy next.config.js if you are NOT using the default configuration
   # COPY --from=builder /app/next.config.js ./
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/package.json ./package.json

   # Automatically leverage output traces to reduce image size
   # https://nextjs.org/docs/advanced-features/output-file-tracing
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs

   EXPOSE 3000

   ENV PORT 3000

   CMD ["node", "server.js"]
   ```

  </details>

4. You can now build an image to deploy yourself, or use a PaaS such as [Railway's](https://railway.app) automated [Dockerfile deployments](https://docs.railway.app/deploy/dockerfiles) to deploy your app.

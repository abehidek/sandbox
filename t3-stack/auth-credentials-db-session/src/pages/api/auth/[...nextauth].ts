import NextAuth, { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials"

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";
import { NextApiRequest, NextApiResponse } from "next";
import { randomUUID } from "crypto"
import Cookies from "cookies";
import { decode, encode } from "next-auth/jwt";


export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = wrapper(req, res);
  return await NextAuth(...data)
}

export default handler;

export function wrapper(req: NextApiRequest, res: NextApiResponse): [req: NextApiRequest, res: NextApiResponse, opts: NextAuthOptions] {
  const sayHello = () => console.log("hello");

  const generateSessionToken = () => {
    // Use `randomUUID` if available. (Node 15.6++)
    return randomUUID()
  }


  const opts: NextAuthOptions = {
    // Include user.id on session
    callbacks: {
      session({ session, user }) {
        if (session.user) {
          session.user.id = user.id;
        }
        return session;
      },
    },
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    secret: env.NEXTAUTH_SECRET,
    providers: [
      GithubProvider({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      }),
      // CredentialProvider({
      //   name: "CredentialProvider",
      //   credentials: {
      //     email: { label: "Email", type: "text", placeholder: "jsmith" },
      //     password: {  label: "Password", type: "password" }
      //   },
      //   async authorize(credentials, req) {
      //     console.log(credentials)

      //     return {
      //       name: "Abe Hidek",
      //       email: "hidek.abe@outlook.com",
      //     }
      //   },
      // }),
      // ...add more providers here
    ],
  };

  return [req, res, opts]
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetchRepository from "../../../lib/fetchRepository";

interface Post {
  slug?: string;
  frontmatter?: {};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts: Post[] = await fetchRepository();
  res.status(200).json(posts);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { ParsedUrlQuery } from "querystring";
import fetchRepositoryFile from "../../../lib/fetchRepositoryFile";

interface Post {
  slug?: string;
  frontmatter?: {};
  content?: string;
}

interface UrlQuery extends ParsedUrlQuery {
  slug?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post>
) {
  const params: UrlQuery = req.query;

  if (params.slug != undefined) {
    const RepositoryFile = await fetchRepositoryFile(params.slug);
    if (RepositoryFile.error) {
      res.status(404);
    }
    const { slug, frontmatter, content } = RepositoryFile;
    res.status(200).json({ slug, frontmatter, content });
  }
  res.status(404);
}

import type { NextApiRequest, NextApiResponse } from "next";
import fetchRepositoryPosts from "../../../lib/fetchRepositoryPosts";
import { PostsSlugs, FetchError, isFetchError } from "../../../common/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsSlugs | FetchError>
) {
  const posts: PostsSlugs | FetchError = await fetchRepositoryPosts();
  if (isFetchError(posts)) res.status(posts.status);
  else res.status(200).json(posts);
}

import type { NextApiRequest, NextApiResponse } from "next";
import fetchRepositoryPosts, {
  FetchError,
  Tree,
  isFetchError,
} from "../../../lib/fetchRepositoryPosts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tree | FetchError>
) {
  const posts: Tree | FetchError = await fetchRepositoryPosts();
  if (isFetchError(posts)) res.status(posts.status);
  else res.status(200).json(posts);
}

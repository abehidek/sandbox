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
  const repo: Tree | FetchError = await fetchRepositoryPosts();
  if (isFetchError(repo)) res.status(repo.status);
  else res.status(200).json(repo);
}

import { GitTreeResponse, PostsSlugs, FetchError } from "../common/types";

export default async function fetchRepositoryPosts(): Promise<
  PostsSlugs | FetchError
> {
  if (process.env.TREE_API == undefined) {
    return { error: "TREE_API .env value missing", status: 500 };
  }
  const repoTreeUrl = process.env.TREE_API;
  const response = await fetch(repoTreeUrl, {
    method: "GET",
    headers: {
      Authorization: `token: ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    return { error: "Response not ok", status: 400 };
  }

  const tree: GitTreeResponse = await response.json();
  return tree.tree
    .filter((item) => item.type == "tree")
    .map(({ path, ...rest }) => {
      return path;
    });
}

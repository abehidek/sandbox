interface Response {
  tree: [
    {
      path: string;
      mode: string;
      type: string;
      sha: string;
      url: string;
    }
  ];
}

export type Tree = string[];

export interface FetchError {
  error: string;
  status: number;
}

export const isFetchError = (res: any): res is FetchError => {
  return "error" in res;
};

export default async function fetchRepositoryPosts(): Promise<
  Tree | FetchError
> {
  if (process.env.TREE_API == undefined) {
    return { error: "TREE_API .env value missing", status: 500 };
  }
  const repoTreeUrl = process.env.TREE_API;
  const response = await fetch(repoTreeUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    return { error: "Response not ok", status: 400 };
  }

  const tree: Response = await response.json();
  return tree.tree
    .filter((item) => item.type == "tree")
    .map(({ path, ...rest }) => {
      return path;
    });
}

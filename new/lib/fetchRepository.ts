import matter from "gray-matter";
import fetchRepositoryFile from "./fetchRepositoryFile";

interface Content {
  path: string;
  mode: string;
  type: string;
  sha: string;
  url: string;
}

interface Api {
  tree: Content[];
}

interface Post {
  slug?: string;
  frontmatter?: { [key: string]: any };
}

export default async function fetchRepository() {
  const repositoryContentsUrl = `${process.env.TREE_API}`;
  const repositoryContents: Api = await fetch(repositoryContentsUrl, {
    method: "GET",
    headers: {
      Authorization: `token: ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  const repositoryFolders = repositoryContents.tree.filter(
    (content) => content.type == "tree"
  );

  const posts: Post[] = [];
  for (const repositoryFolder of repositoryFolders) {
    const { slug, frontmatter } = await fetchRepositoryFile(
      repositoryFolder.path
    );
    posts.push({ slug, frontmatter });
  }

  return posts;
}

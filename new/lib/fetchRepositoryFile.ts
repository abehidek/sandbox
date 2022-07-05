import matter from "gray-matter";

export default async function fetchRepositoryFile(postSlug: string) {
  const repositoryFileUrl = `${process.env.CONTENT_API}/${postSlug}/main.md`;

  const repositoryFileRequest = await fetch(repositoryFileUrl, {
    method: "GET",
    headers: {
      Authorization: `token: ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.VERSION.raw",
    },
  });

  if (repositoryFileRequest.status != 200) {
    return {
      error: "error fetching data",
    };
  }

  const repositoryFile = await repositoryFileRequest.text();

  const { data: frontmatter, content } = matter(repositoryFile);

  if (!frontmatter.cover_image.startsWith("http")) {
    if (frontmatter.cover_image.startsWith("/")) {
      frontmatter.cover_image = frontmatter.cover_image.replace(
        /^/,
        `${process.env.FILES_API}/${postSlug}`
      );
    } else {
      frontmatter.cover_image = frontmatter.cover_image.replace(
        /^/,
        `${process.env.FILES_API}/${postSlug}/`
      );
    }
  }

  return {
    slug: postSlug,
    frontmatter,
    content,
  };
}

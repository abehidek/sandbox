import matter from "gray-matter";

export interface Post {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image?: string;
  };
  content: string;
}

export interface FetchError {
  error: string;
  status: number;
}

export const isFetchError = (res: any): res is FetchError => {
  return "error" in res;
};

export default async function fetchRepositoryPost(
  postSlug: string
): Promise<Post | FetchError> {
  const repoFileUrl = `${process.env.CONTENT_API}/${postSlug}/main.md`;

  const response = await fetch(repoFileUrl, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.VERSION.raw",
    },
  });

  if (!response.ok) {
    return {
      error: "Response not ok",
      status: 400,
    };
  }

  const text = await response.text();

  try {
    const markdownMatter = matter(text);
    const markdownPost: Post = {
      slug: postSlug,
      frontmatter: {
        title: markdownMatter.data.title,
        date: markdownMatter.data.date,
        excerpt: markdownMatter.data.excerpt,
        cover_image: markdownMatter.data.cover_image,
      },
      content: markdownMatter.content,
    };
    return markdownPost;
  } catch (error) {
    return { error: "Error deserializing markdown text", status: 400 };
  }
}

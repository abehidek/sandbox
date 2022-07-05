import type { NextPage } from "next";
import fetchRepository from "../../lib/fetchRepository";
import fetchRepositoryFile from "../../lib/fetchRepositoryFile";

interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}

interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

const PostPage: NextPage<Post> = ({ slug, frontmatter, content }) => {
  return (
    <div>
      <p>Salve</p>
      <p>{frontmatter.title}</p>
      <p>{content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  interface PostFetch {
    slug?: string;
    frontmatter?: {};
    content?: string;
  }

  const posts: PostFetch[] = await fetchRepository();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

interface Paths {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params: { slug } }: Paths) {
  return {
    props: await fetchRepositoryFile(slug),
  };
}

export default PostPage;

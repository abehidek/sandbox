import type { NextPage } from "next";
import Link from "next/link";
import fetchRepositoryPost from "../lib/fetchRepositoryPost";
import fetchRepositoryPosts from "../lib/fetchRepositoryPosts";
import { PostsSlugs, Post, isFetchError, FetchError } from "../common/types";

interface Props {
  posts: Post[] | FetchError;
}

interface getStaticProps {
  props: Props;
  revalidate: Number;
}

const Home: NextPage<Props> = (props) => {
  if (isFetchError(props.posts)) {
    return <div>Error</div>;
  }

  console.log(props);

  return (
    <div className="text-white">
      <p>Posts:</p>
      {props.posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.slug}`}>
          <div className="bg-slate-900 rounded px-4 py-2 cursor-pointer hover:bg-slate-700">
            <p>{post.slug}</p>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps(): Promise<getStaticProps> {
  const postsSlugs: PostsSlugs | FetchError = await fetchRepositoryPosts();
  if (isFetchError(postsSlugs)) {
    return {
      props: {
        posts: postsSlugs,
      },
      revalidate: 30,
    };
  }
  const posts: Post[] = [];
  for (const item of postsSlugs) {
    const post = await fetchRepositoryPost(item);
    if (!isFetchError(post)) {
      posts.push(post);
    }
  }

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default Home;

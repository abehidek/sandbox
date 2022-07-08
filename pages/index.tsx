import type { NextPage } from "next";
import Link from "next/link";
import fetchRepositoryPost from "../lib/fetchRepositoryPost";
import fetchRepositoryPosts from "../lib/fetchRepositoryPosts";
import PostsComponent from "../components/PostComponent";
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
      <PostsComponent posts={props.posts} />
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

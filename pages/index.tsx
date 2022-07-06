import type { NextPage } from "next";
import Head from "next/head";
import { PostCard } from "../components/PostCard";

export interface Frontmatter {
  title: string;
  date: string;
  excerpt: string;
  cover_image: string;
}

export interface Post {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
}

interface Props {
  posts: Array<Post>;
}

export interface Post2 {
  slug?: string;
  frontmatter?: { [key: string]: any };
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="text-white">
      <Head>
        <title>abehidek blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h2>Posts:</h2>
      <div className="py-3">
        {Array.from(posts).map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

// Server-side

import fetchRepository from "../lib/fetchRepository";
import { sortByDate } from "../lib/sort";

export async function getStaticProps() {
  const posts: Post2[] = await fetchRepository();
  console.log(posts);
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
    revalidate: 10,
  };
}

export default Home;

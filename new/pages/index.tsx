import type { NextPage } from "next";
import { HomeBlogPost } from "../components/HomeBlogPost";
import styles from "../styles/Home.module.scss";

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

import fetchRepository from "../lib/fetchRepository";

interface Props { posts: Array<Post>; }

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <h2>Posts:</h2>
      <div>
        {Array.from(posts).map((post, index) => (
          <HomeBlogPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await fetchRepository();
  console.log(posts);
  return {
    props: {
      posts
    }, revalidate: 10,
  }
}

export default Home;

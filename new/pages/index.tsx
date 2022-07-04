import type { NextPage } from "next";
import { HomeBlogPost } from "../components/HomeBlogPost";
import styles from "../styles/Home.module.scss";
import { Post } from '../interfaces/Post.interface'

interface Props {
  posts: Array<Post>;
}

const Home: NextPage<Props> = ({ posts }) => {
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
  const samplePosts = [
    {
      name: "post 1",
      excerpt: "sla",
      slug: "sla",
      date: "sla tmb"
    },
    {
      name: "post 2",
      excerpt: "sla",
      slug: "sla",
      date: "sla tmb"
    }
  ]
  return {
    props: {
      posts: samplePosts
    }, revalidate: 10,
  }
}

export default Home;

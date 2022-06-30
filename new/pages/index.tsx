import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

interface Post {
  name: string;
  excerpt: string;
  slug: string;
  date: string;
}

const Home: NextPage<Post> = (posts) => {
  return (
    <div className={styles.container}>
      <h2>Posts</h2>
    </div>
  );
};

export async function getStaticProps() {}

export default Home;

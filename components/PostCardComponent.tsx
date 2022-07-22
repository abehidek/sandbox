import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../common/types";

interface PostProps {
  post: Post;
}

const PostCardComponent: NextPage<PostProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="post-card rounded">
        <p>{post.frontmatter.title}</p>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCardComponent;

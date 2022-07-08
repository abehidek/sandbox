import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../common/types";

interface PostProps {
  post: Post;
}

const PostCardComponent: NextPage<PostProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="bg-slate-900 rounded px-4 py-2 cursor-pointer hover:bg-slate-700">
        <p>{post.slug}</p>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCardComponent;

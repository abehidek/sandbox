import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../common/types";

interface PostProps {
  post: Post;
}

const PostCardComponent: NextPage<PostProps> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="bg-slate-900 rounded p-4 cursor-pointer hover:bg-slate-700 mt-4 flex flex-col gap-1">
        <p className="text-2xl font-bold">{post.frontmatter.title}</p>
        <p>{post.frontmatter.date}</p>
        <p className="text-sm">{post.frontmatter.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCardComponent;

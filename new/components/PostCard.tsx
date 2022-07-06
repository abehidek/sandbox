import type { NextPage } from "next";
import Link from "next/link";
import { Post } from "../pages/index";

interface Props {
  post: Post;
}

export const PostCard: NextPage<Props> = ({ post }) => {
  return (
    <div className="bg-slate-800 rounded text-white px-4 py-2 cursor-pointer hover:bg-slate-700">
      <Link href={`/post/${post.slug}`}>
        <div>
          <h1>{post.slug}</h1>
          <p>{post.frontmatter.date}</p>
        </div>
        {/* <img src={post.frontmatter.cover_image} /> */}
      </Link>
    </div>
  );
};

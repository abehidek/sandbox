import type { NextPage } from "next";
import { Post } from '../pages/index'

interface Props {
    post: Post;
}

export const HomeBlogPost: NextPage<Props> = ({ post }) => {
    return (
        <div>
            <p>Hello World</p>
            <p>{post.slug}</p>
            <p>{post.frontmatter.date}</p>
            <p></p>
        </div>
    );
}
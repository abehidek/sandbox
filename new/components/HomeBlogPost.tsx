import type { NextPage } from "next";
import { Post } from '../interfaces/Post.interface'

interface Props {
    post: Post;
}

export const HomeBlogPost: NextPage<Props> = ({ post }) => {
    return (
        <div>
            <p>Hello World</p>
            <p>{post.name}</p>
        </div>
    );
}
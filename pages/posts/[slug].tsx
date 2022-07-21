import type { NextPage } from "next";
import fetchRepositoryPost from "../../lib/fetchRepositoryPost";
import fetchRepositoryPosts from "../../lib/fetchRepositoryPosts";
import { Post, FetchError, isFetchError } from "../../common/types";
import Image from "next/image";

interface PathRoute {
  params: {
    slug: string;
  };
}
type Props = {
  post: Post | FetchError;
};

interface getStaticProps {
  props: Props;
  revalidate: Number;
}

const TestPost: NextPage<Props> = ({ post }) => {
  console.log(post);
  if (isFetchError(post)) {
    return <div>Error fetching data</div>;
  }
  let coverImage;
  if (post.frontmatter.cover_image != undefined) {
    coverImage = (
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        width="100%"
        height={60}
        layout="responsive"
        objectFit="cover"
        className="w-full object-scale-down"
      />
    );
  } else {
    coverImage = <div>where is the image</div>;
  }

  return (
    <div className="text-white flex flex-col gap-5">
      <header className="bg-slate-900 rounded p-4 justify-between">
        <div className="flex flex-col">
          <p>{post.frontmatter.title}</p>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.excerpt}</p>
        </div>
        {coverImage}
      </header>

      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await fetchRepositoryPosts();
  if (!isFetchError(paths)) {
    return {
      paths: paths.map((path) => ({
        params: {
          slug: path,
        },
      })),
      fallback: false,
    };
  } else {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({
  params: { slug },
}: PathRoute): Promise<getStaticProps> {
  const post: Post | FetchError = await fetchRepositoryPost(slug);
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default TestPost;

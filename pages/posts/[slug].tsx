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

  const renderCoverImage = () => {
    if (post.frontmatter.cover_image == undefined) return <></>;
    return (
      <Image
        src={post.frontmatter.cover_image}
        alt={post.frontmatter.title}
        width="100%"
        height={60}
        layout="responsive"
        objectFit="cover"
        className="w-full object-scale-down rounded"
      />
    );
  };

  return (
    <div className="text-white flex flex-col gap-8">
      <header className="rounded flex flex-col gap-4">
        <h1 className="text-5xl font-bold">{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <h3>{post.frontmatter.excerpt}</h3>
        {renderCoverImage()}
      </header>

      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = await fetchRepositoryPosts();

  if (isFetchError(paths))
    return {
      paths: [],
      fallback: false,
    };

  return {
    paths: paths.map((path) => ({
      params: {
        slug: path,
      },
    })),
    fallback: false,
  };
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

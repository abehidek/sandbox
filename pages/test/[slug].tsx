import type { NextPage } from "next";
import fetchRepositoryPost, {
  FetchError,
  Post,
} from "../../lib/fetchRepositoryPost";
import fetchRepositoryPosts, {
  isFetchError,
} from "../../lib/fetchRepositoryPosts";

interface PathRoute {
  params: {
    slug: string;
  };
}
type Prop = {
  post: Post | FetchError;
};

interface Props {
  props: Prop;
}

const TestPost: NextPage<Prop> = ({ post }) => {
  console.log(post);
  if (isFetchError(post)) {
    return <div>Error fetching data</div>;
  }
  return (
    <div className="text-white flex flex-col gap-5">
      <header className="bg-slate-800 rounded p-2 h-48 flex justify-between">
        <div className="flex flex-col">
          <p>{post.frontmatter.title}</p>
          <p>{post.frontmatter.date}</p>
          <p>{post.frontmatter.excerpt}</p>
        </div>
        <img
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          className="h-full object-scale-down"
        />
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
}: PathRoute): Promise<Props> {
  const post: Post | FetchError = await fetchRepositoryPost(slug);
  return {
    props: {
      post,
    },
  };
}

export default TestPost;

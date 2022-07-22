import type { NextPage } from "next";
import fetchRepositoryPost from "../../lib/fetchRepositoryPost";
import fetchRepositoryPosts from "../../lib/fetchRepositoryPosts";
import { Post, FetchError, isFetchError } from "../../common/types";
import ReactMarkdown from "react-markdown";
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
  if (isFetchError(post)) {
    return <div>Error fetching data</div>;
  }

  const renderCoverImage = () => {
    if (post.frontmatter.cover_image == undefined) return <></>;
    return (
      <div>
        <Image
          src={post.frontmatter.cover_image}
          alt={post.frontmatter.title}
          width="100%"
          height={50}
          layout="responsive"
          objectFit="cover"
          className="rounded"
        />
      </div>
    );
  };

  return (
    <div className="post">
      <header>
        <div className="horizontal-padding">
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
        </div>
      </header>

      <main className="horizontal-padding">
        <h1>{post.frontmatter.excerpt}</h1>
        {renderCoverImage()}
        <ReactMarkdown
          components={{
            img: ({ node, ...props }) => (
              <img style={{ maxWidth: "100%" }} {...props} />
            ),
            code: ({ node, ...props }) => (
              <pre style={{ overflow: "auto" }}>
                <code
                  style={{
                    textOverflow: "ellipsis",
                    whiteSpace: "pre",
                  }}
                  {...props}
                />
              </pre>
            ),
          }}
          transformImageUri={(uri) =>
            uri.replace(/^/, `${process.env.FILES_API}/${post.slug}/`)
          }
        >
          {post.content}
        </ReactMarkdown>
      </main>
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

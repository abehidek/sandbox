import matter from 'gray-matter';
import fetchRepoTree from '../../lib/fetchRepoTree';
import fetchMarkdown from '../../lib/fetchMarkdown';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function BlogPage({ slug, frontmatter, content }) {
  return (
    <>
      <Head>
        <title>Abe Hidek Blog | {frontmatter.title}</title>
      </Head>
      <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{frontmatter.title}</h1>
        <div className='post-date'>{frontmatter.date}</div>
        <Image
          src={frontmatter.cover_image}
          width='100%'
          height='70%'
          layout='responsive'
          objectFit='cover'
        />
        <div className='post-body'>
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img style={{ maxWidth: '100%' }} {...props} />
              ),
              code: ({ node, ...props }) => (
                <code
                  style={{
                    textOverflow: 'ellipsis',
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                  {...props}
                />
              ),
            }}
            transformImageUri={(uri) =>
              uri.replace(/^/, `${process.env.cdnRaw}/${slug}/`)
            }
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const folders = await fetchRepoTree();
  const paths = folders.map((foldername) => ({
    params: {
      slug: foldername,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) { 
  const md = await fetchMarkdown(slug)
  const { data: frontmatter, content } = matter(md)
  if (!frontmatter.cover_image.startsWith('http')) {
    if (frontmatter.cover_image.startsWith('/')) {
      frontmatter.cover_image = frontmatter.cover_image.replace(
        /^/,
        `${process.env.cdnRaw}/${slug}`
      );
    } else {
      frontmatter.cover_image = frontmatter.cover_image.replace(
        /^/,
        `${process.env.cdnRaw}/${slug}/`
      );
    }
  }
  return {
    props: {
      slug,
      frontmatter,
      content,
    },
    revalidate: 60,
  };
}

import matter from "gray-matter"
import Link from "next/link"
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export default function BlogPage({ slug, frontmatter, content }) {
  return (
    <>
      <Head>
        <title>Abe Hidek Blog | {frontmatter.title}</title>
      </Head>
      <Link href='/'>
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-date">
          {frontmatter.date}
        </div>
        <img src={frontmatter.cover_image} alt="" />
        <div className="post-body">
          <ReactMarkdown
            components={
              {
                img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>,
                code:({node, ...props})=><code style={{textOverflow: 'ellipsis', wordWrap: 'break-word', whiteSpace: 'pre-wrap', wordBreak: 'break-word'}}{...props}/>
              }
            }
            transformImageUri = {(uri) => uri.replace(/^/, `https://www.gitlab.com/abehidek/posts/-/raw/main/${slug}/`)}>
            { content }
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const contents = await fetch("https://gitlab.com/abehidek/posts/-/refs/main/logs_tree/?format=json&offset=0")
  const response = await contents.json()
  const folders = []

  response.map(content => {
    if (content.type == "tree"){
      folders.push(content.file_name)
    }
  })

  const paths = folders.map((foldername) =>({
    params: {
      slug: foldername,
    }
  }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) { 
  const mdPromise = await fetch(`https://www.gitlab.com/abehidek/posts/-/raw/main/${slug}/main.md`)
  const md = await mdPromise.text()
  const { data: frontmatter, content } = matter(md)
  return {
    props: {
      slug,
      frontmatter,
      content
    },
    revalidate: 60,
  }
}

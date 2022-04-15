import matter from "gray-matter"
import Link from "next/link"
import ReactMarkdown from 'react-markdown'
export default function BlogPage({ slug, frontmatter, content }) {
  return (
    <>
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
            components={{img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>}}
            transformImageUri = {(uri) => uri.replace(/^/, `https://raw.githubusercontent.com/abehidek/posts/main/${slug}/`)}>
            { content }
          </ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export async function getServerSidePaths({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const contents = await fetch("https://api.github.com/repos/abehidek/posts/contents")
  const response = await contents.json()
  const folders = []

  response.map(content => {
    if (content.type == "dir"){
      folders.push(content.name)
    }
  })
  const paths = folders.map((foldername) =>({
    params: {
      slug: foldername,
    }
  }))
  return {
    paths: paths,
    fallback: false
  }
}

export async function getServerSideProps({ res, params: { slug } }) { 
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const mdPromise = await fetch(`https://raw.githubusercontent.com/abehidek/posts/main/${slug}/main.md`)
  const md = await mdPromise.text()
  const { data: frontmatter, content } = matter(md)
  return {
    props: {
      slug,
      frontmatter,
      content
    }
  }
}

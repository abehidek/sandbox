import Link from "next/link"
import Image from "next/image"
export default function Post({post}) {
  return (
    <div className="card">
      <Image src={post.frontmatter.cover_image} alt={post.frontmatter.title} width="500px" height="350px"  />
      <div className="post-date">
        Posted on {post.frontmatter.date}
      </div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>

  )
}

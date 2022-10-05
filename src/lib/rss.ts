
import { getAllArticles } from '../server/services/articles'
import RSS from 'rss'
import { writeFileSync } from 'fs'

export default async function getRSS() {
  const url = process.env.VERCEL_URL ?? "http://localhost:3000"
  const allArticles = await getAllArticles()
  
  const feed = new RSS({
    title: "abehidek",
    description: "Drafts and guides for compsci",
    site_url: url,
    feed_url: `${url}/feed.xml`,
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Abe Hidek`,
  })

  allArticles.map(article => {
    feed.item({
      title: article.meta.title,
      url: `${url}/blog/articles/${article.meta.slug}`,
      date: article.meta.date,
      description: article.meta.excerpt
    })
  })

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }))
}
# Abe Hidek's blog

#### https://abehidek-blog.vercel.app

## Todo

Refactor the entire code (again) but using mdx and without fetching for external sources (such as another github repo), so this means switching the current model (a separate repo for blog posts) to a new model (one repo with all posts + mdx), still using github as a cms, so ISR (Incremental Static Regeneration) dont need to be used anymore.

Another interesting feature is using tags (this can be accomplished reading from the markdown frontmatter I guess?) and provide a way to search by that.

Same for year/date btw.

### Useful sources for this:
- [MDX](https://mdxjs.com/)
- https://www.youtube.com/watch?v=dsCfi0yRr1w
- https://www.youtube.com/watch?v=J_0SBJMxmcw
- https://www.youtube.com/watch?v=WCGopHwXnic

---

## Actual Model

This blog works by fetching markdown and images files from a [git remote repository](https://gitlab.com/abehidek/posts), and then rendering as a page in the website.

It's been times since I've used a JavaScript framework, so to learn recall some key concepts, I decided to use [React](https://reactjs.org/) since it's the most popular framework nowadays, Also, I'm using [Next.js](https://nextjs.org/) on top of that to render the page in the server side.

The way this website fetch data:
```
├── first-post            domain-name/blog/first-post
│   ├── image1.jpeg
│   └── main.md
└── second-post         -> page route name. Example: domain-name/blog/second-post
    ├── image2.jpeg     -> images refered by markdown.
    └── main.md         -> markdown to be render in page.
```

After fetching the markdown, [React-Markdown](https://github.com/remarkjs/react-markdown) parses it and then render as a React component with the images relative paths being converted to an URL.

Since it's a Next.js project, it's easy to deploy on [Vercel](https://vercel.com/).

This project was made using [this video](https://youtu.be/MrjeefD8sac) as a basis, so the code source is very similar.




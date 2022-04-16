# Abe Hidek's blog

#### https://abehidek-blog.vercel.app

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

I decided to use gitlab to store my data because on github, the API takes about 5 minutes to update after a commit, so If I add a new post in the repository, I will only see in the site after 5 minutes.

Gitlab doesn't have that problem, it's way faster than github, however, it important to note that this makes the site run slower and laggy.

This project was made using [this video](https://youtu.be/MrjeefD8sac) as a basis, so the code source is very similar.




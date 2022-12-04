import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import './App.css'

function App1() {
  const [markdown, setMarkdown] = useState("# Heading");

  return (
    <div className="markdown__container">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      {/*Edit <code>src/App.js</code> and save to reload.*/}
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown children={markdown} className="markdown__preview" />
    </div>
  );
}
function App() {
  // const markdown = "# Hello World! \n![Image](/duck2.jpg)"
  const [post, setPost] = useState('')
    
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/abehidek/posts/main/post1.md")
      .then(res => res.text())
      .then(res => setPost(res))
    fetch("https://api.github.com/repos/abehidek/posts/contents")
      .then(res => res.json())
      .then(json => console.log(json))
  })
  return (
    <div>
      { post }
      <ReactMarkdown
        className='content'
        children={post}
        components={{img:({node,...props})=><img style={{maxWidth:'100%'}}{...props}/>}}
        transformImageUri = {(uri) => uri.replace(/^/, 'https://raw.githubusercontent.com/abehidek/posts/main/')}
      />
    </div>
  )
}

export default App

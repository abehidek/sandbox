// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// function TemporaryName() {
//   return (
//     <div>
//         <img src="./react-logo.png" width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>  
//   )
// }

// ReactDOM.render(temporaryName(), document.getElementById("root"))

// import Header from "./Header.js"

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="img" />
        <ul className="nav-items">
          <li>Home</li>
          <li>Docs</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}

function Page() {
  return (
    <div className="page">
      <h1>Learning React</h1>
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer" >
      <small>@ 2022 Abe development. All rights reserved.</small>
    </footer>
  )
}

ReactDOM.render(
  <div className="root">
    <Header />
    <Page />
    <Footer />
  </div>,
  document.getElementById("root")
)


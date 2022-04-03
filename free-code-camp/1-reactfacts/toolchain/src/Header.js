import React from "react"
import logo from "./react-logo.png"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} alt="React" className="img" />
        <ul className="nav-items">
          <li>Home</li>
          <li>Docs</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  )
}


import React from 'react'
import logo from '../img/react-logo.png'

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <img src={logo} alt='React' className='img' />
          <h1>ReactFacts</h1> 
        </div>
        <h3>React Course - Project 1</h3>
      </nav>
    </header>
  )
}

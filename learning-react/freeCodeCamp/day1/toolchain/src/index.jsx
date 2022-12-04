import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import './style.css'

ReactDOM.render(
  <div className='root'>
    <Header />
    <Main />
    <Footer />
  </div>,
  document.getElementById('root')
)

import React from 'react'
import Logo from "./assets/logo.png"
import Navbar from './layouts/Navbar'
import Service from './layouts/Service'
import Banner from './layouts/Banner'
import About from './layouts/About'
import Project from './layouts/Project'
import Portfolio from './layouts/Portfolio'
import Client from './layouts/Client'
import Blog from './layouts/Blog'
import Fotter from './layouts/Fotter'
import Contact from './layouts/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Service/>
      <About/>
      <Project/>
      <Portfolio/>
      <Client/>
      <Contact/>
      <Blog/>
      <Fotter/>
    </div>
  )
}

export default App

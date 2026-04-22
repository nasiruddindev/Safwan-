import React from 'react'
import Logo from "./assets/logo.png"
import Navbar from './layouts/Navbar'
import Service from './layouts/Service'
import Banner from './layouts/Banner'
import About from './layouts/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Service/>
      <About/>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  
    return(
<div className='bg-yellow-50'>
      <Navbar>
      </Navbar>
       <Home/>
       <Education/>
       <Skills/>
       <Contact/>
       <Footer/>
    </div>

     
  )
}

export default App

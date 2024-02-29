import { useState } from 'react'
import Navbar from '/src/Components/Navbar/Navbar.jsx'
import Profile from '/src/Components/Profile/Profile.jsx'
import About from '/src/Components/About/About.jsx'
import Contact from '/src/Components/Contact/Contact.jsx'
import Skills from '/src/Components/Skills/Skills.jsx'
import Projects from '/src/Components/Project/Projects.jsx'
import Footer from '/src/Components/Footer/Footer.jsx'
import './App.css'
function App() {

  return (
    <>
       <Navbar/>
       <Profile/>
       <About/>
       <Contact/>
       <Skills/>
       <Projects/>
       <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import Header from "./components/header.jsx";
import Experience from './components/experience.jsx'; 
import Projects from './components/projects.jsx';
import Footer from './components/footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Projects />
      <Experience/>
      <Footer />
    </>
  )
}

export default App

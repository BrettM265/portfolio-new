import { useState } from 'react'
import Header from "./components/header.jsx";
import Experience from './components/experience.jsx'; 
import Projects from './components/projects.jsx';
import WebDesign from './components/web-design.jsx';
import Footer from './components/footer.jsx';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <WebDesign />
      <Projects />
      <Experience/>
      <Footer />
    </>
  )
}

export default App

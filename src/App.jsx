import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <Skills></Skills>
      <Certifications></Certifications>
      <Contact></Contact>
    </>
  )
}

export default App

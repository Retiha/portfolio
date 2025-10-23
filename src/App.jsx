import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import "./App.css";
import Resume from "./components/resume";

function App() {
  return (
    <>
      <Navbar />
      <main className="portfolio-grid">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
        
      </main>
    </>
  );
}

export default App;

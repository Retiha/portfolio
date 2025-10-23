import React from "react";
import "./Navbar.css"; // Optional if you want separate styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

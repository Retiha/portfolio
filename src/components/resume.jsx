import React from "react";

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <h2>Resume</h2>
        <p>Download my resume here:</p>
        <a href="/resume.pdf" target="_blank"><button>Download Resume</button></a>
      </div>
    </section>
  );
}

export default Resume;

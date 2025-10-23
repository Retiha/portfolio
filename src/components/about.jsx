import React from "react";

function About() {
  return (
    <section id="about" className="section about-section">
      <div
        className="about-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "start",
          padding: "50px 10%",
        }}
      >
        {/* About Text */}
        <div>
          <h2 style={{ color: "#dcd6f7" }}>About Me</h2>
          <p style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.6" }}>
            Hello! I'm <b>Retiha</b>, a passionate front-end developer who loves creating clean, interactive, and responsive web interfaces. I enjoy learning modern web technologies like React, Node.js, and UI/UX design to deliver professional web solutions.
          </p>
        </div>

        {/* About Grid */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          <div
            className="about-box"
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <h3 style={{ color: "#6c63ff" }}>Projects Completed</h3>
            <p>3+ major projects demonstrating front-end and full-stack skills</p>
          </div>

          <div
            className="about-box"
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <h3 style={{ color: "#6c63ff" }}>Education</h3>
            <p>B.E. Computer Engineering (Ongoing)</p>
          </div>

          <div
            className="about-box"
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <h3 style={{ color: "#6c63ff" }}>Goal</h3>
            <p>To become a skilled Product Engineer in a top tech company</p>
          </div>

          <div
            className="about-box"
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <h3 style={{ color: "#6c63ff" }}>Interests</h3>
            <p>UI/UX Design, Web Animation, Open Source</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

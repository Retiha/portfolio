import React from "react";
import profilePic from "../assets/profile.jpg"; // Make sure your profile image exists here

function Hero() {
  return (
    <section
      id="hero"
      className="section hero-section"
      style={{
        background: "#0a0a0a",
        padding: "100px 10%",
      }}
    >
      <div
        className="hero-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* Hero Text */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1 style={{ color: "#dcd6f7", fontSize: "2.5rem", marginBottom: "15px" }}>
            Hello, I'm [Your Name]
          </h1>
          <p style={{ color: "#ccc", fontSize: "1.2rem", lineHeight: "1.6" }}>
            Front-end Developer | React | JavaScript | Portfolio
          </p>
          <div style={{ marginTop: "20px", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <a href="#contact">
              <button
                style={{
                  backgroundColor: "#6c63ff",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                }}
              >
                Contact Me
              </button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#6c63ff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  border: "none",
                }}
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "3px solid #6c63ff",
            }}
          />
          
        </div>
      </div>
    </section>
  );
}

export default Hero;

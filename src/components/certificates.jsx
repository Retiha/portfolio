import React from "react";

const certificatesData = [
  { title: "React Development", issuer: "Coursera", year: "2025", link: "#" },
  { title: "JavaScript Essentials", issuer: "Udemy", year: "2024", link: "#" },
  { title: "Full-Stack Web Development", issuer: "freeCodeCamp", year: "2025", link: "#" },
  { title: "Machine Learning Basics", issuer: "Coursera", year: "2025", link: "#" },
  { title: "Node.js Backend Development", issuer: "Udemy", year: "2024", link: "#" },
  { title: "CSS Flexbox & Grid Mastery", issuer: "freeCodeCamp", year: "2024", link: "#" },
  { title: "Python Programming Fundamentals", issuer: "Coursera", year: "2023", link: "#" },
  { title: "Data Structures & Algorithms", issuer: "Udemy", year: "2024", link: "#" },
  { title: "UI/UX Design Basics", issuer: "Coursera", year: "2025", link: "#" },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="section certificates-section"
      style={{ padding: "50px 5%", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h2 style={{ color: "#dcd6f7", marginBottom: "20px" }}>Certificates</h2>
      <p style={{ color: "#ccc", marginBottom: "30px" }}>
        Some of my certifications demonstrating skills and achievements.
      </p>

      <div
        className="certificates-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {certificatesData.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div>
              <h3 style={{ color: "#6c63ff", marginBottom: "10px" }}>{cert.title}</h3>
              <p style={{ color: "#ccc", marginBottom: "5px" }}>{cert.issuer}</p>
              <p style={{ color: "#888" }}>{cert.year}</p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "15px",
                padding: "10px",
                borderRadius: "6px",
                backgroundColor: "#6c63ff",
                color: "#fff",
                textAlign: "center",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#5848c2")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#6c63ff")}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;

import React from "react";

// Replace links and descriptions with your real projects
const projectsData = [
  {
    title: "Simple Food Ordering System",
    description:
      "A full-stack application for ordering food online with admin and user panel. Built with Node.js, Express, and MongoDB.",
    tech: "React, Node.js, MongoDB",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Recruiter",
    description:
      "A machine learning project that screens resumes and matches skills to job requirements automatically.",
    tech: "Python, Flask, Scikit-learn",
    github: "#",
    demo: "#",
  },
  {
    title: "CodeSprint Platform",
    description:
      "A competitive coding platform with user and admin roles, integrated with Judge0 API for code execution.",
    tech: "React, Node.js, Express, MongoDB",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase skills, projects, certificates, and contact info.",
    tech: "React, CSS",
    github: "#",
    demo: "#",
  },
  {
    title: "Hostel Complaint Management System",
    description:
      "A system to manage hostel complaints, categorize them, and generate reports for admins.",
    tech: "PHP, MySQL",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      style={{ padding: "50px 10%" }}
    >
      <h2 style={{ color: "#dcd6f7", marginBottom: "30px" }}>Projects</h2>

      <div
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div>
              <h3 style={{ color: "#6c63ff", marginBottom: "10px" }}>
                {project.title}
              </h3>
              <p style={{ color: "#ccc", marginBottom: "10px" }}>
                {project.description}
              </p>
              <p style={{ color: "#888", fontStyle: "italic" }}>
                Tech: {project.tech}
              </p>
            </div>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "6px",
                  backgroundColor: "#6c63ff",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#5848c2")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#6c63ff")
                }
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "8px",
                  borderRadius: "6px",
                  backgroundColor: "#6c63ff",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#5848c2")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#6c63ff")
                }
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

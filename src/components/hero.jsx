import React from "react";
import profilePic from "../assets/profile.jpg";
import resumePDF from "../assets/resume.pdf";

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-content">
          {/* Left side - Text */}
          <div className="text-content">
            <h1>
              Hi, I'm <span>Retiha</span> 👋
            </h1>
            <h2>Front-End Developer</h2>
            <p>
              I love creating elegant, responsive, and interactive web experiences
              using modern technologies like React, Tailwind CSS, and JavaScript.
              My passion lies in designing websites that feel intuitive and look beautiful.
            </p>
            <a href={resumePDF} download="Retiha_Resume.pdf">
              <button className="resume-btn">📄 Download Resume</button>
            </a>
          </div>

          {/* Right side - Image */}
          <div className="image-content">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      {/* Inline CSS */}
      <style>{`
        .hero-section {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 120px 10%;
          background: linear-gradient(135deg, #080808ff, #1a1a1a);
          min-height: 100vh;
          color: #333;
          position: relative;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          max-width: 1200px;
          width: 100%;
        }

        .text-content {
          flex: 1;
          max-width: 600px;
        }

        .text-content h1 {
          font-size: 2.8rem;
          margin-bottom: 10px;
        }

        .text-content h1 span {
          color: #0078ff;
        }

        .text-content h2 {
          font-size: 1.5rem;
          color: #dcd6f7;
          margin-bottom: 20px;
        }

        .text-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #dcd6f7;
          margin-bottom: 30px;
        }

        .resume-btn {
          background-color: #0078ff;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .resume-btn:hover {
          background-color: #005fcc;
          transform: scale(1.05);
        }

        .image-content {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .profile-img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #0078ff;
          box-shadow: 0 8px 20px rgba(0, 120, 255, 0.3);
          transition: transform 0.3s ease;
        }

        .profile-img:hover {
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }

          .text-content {
            max-width: 100%;
          }

          .profile-img {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;

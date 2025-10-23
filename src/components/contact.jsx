import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current,
        "YOUR_USER_ID" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="section contact-section"
      style={{ padding: "50px 10%" }}
    >
      <h2 style={{ color: "#dcd6f7" }}>Contact Me</h2>
      <p style={{ color: "#ccc", marginBottom: "30px" }}>
        Get in touch via the form or connect with me on social media.
      </p>

      <div
        className="contact-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          style={{
            flex: "1 1 400px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#1a1a1a",
              color: "#fff",
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#1a1a1a",
              color: "#fff",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#1a1a1a",
              color: "#fff",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#6c63ff",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#5848c2")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#6c63ff")
            }
          >
            Send Message
          </button>
          {success && <p style={{ color: "#6c63ff" }}>{success}</p>}
        </form>

        {/* Social Links - Single Line */}
        <div
          className="social-links"
          style={{
            flex: "1 1 200px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Email */}
          <a
            href="mailto:youremail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              color: "#dcd6f7",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#6c63ff")}
            onMouseLeave={(e) => (e.target.style.color = "#dcd6f7")}
          >
            <FaEnvelope size={36} />
            <span>Email</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              color: "#dcd6f7",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#6c63ff")}
            onMouseLeave={(e) => (e.target.style.color = "#dcd6f7")}
          >
            <FaGithub size={36} />
            <span>GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              color: "#dcd6f7",
              textDecoration: "none",
              fontSize: "16px",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#6c63ff")}
            onMouseLeave={(e) => (e.target.style.color = "#dcd6f7")}
          >
            <FaLinkedin size={36} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

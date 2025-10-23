import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A202C", padding: "20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

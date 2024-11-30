import React from "react";

const Header = () => {
  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      {/* Navbar Section */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Editable Resume Builder
        </div>
        <div>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ margin: "0 15px" }}>
              <a
                href="#home"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "1rem",
                }}
              >
                Home
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="#about"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "1rem",
                }}
              >
                About
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="#services"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "1rem",
                }}
              >
                Services
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="#contact"
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontSize: "1rem",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

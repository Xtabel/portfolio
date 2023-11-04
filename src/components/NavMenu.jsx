import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you're using it
import "./some.css";

const NavMenu = ({ showMenu, closeMenu }) => {
  const menuStyle = {
    display: showMenu ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#CC5F70", // Your preferred background color
    zIndex: 10,
    textAlign: "center",
    paddingTop: "100px", // Adjust this value for spacing
  };

  return (
    <div style={menuStyle}>
      <Box className="my-link" onClick={() => closeMenu("aboutRef")}>
        About
      </Box>
      <Box className="my-link" onClick={() => closeMenu("experienceRef")}>
        Experience
      </Box>
      <Box className="my-link" onClick={() => closeMenu("projectsRef")}>
        Projects
      </Box>
      <Box className="my-link" onClick={() => closeMenu("contactRef")}>
        Contact
      </Box>
    </div>
  );
};

export default NavMenu;


import React from "react";
import "./some.css";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const NavMenu = ({ showMenu, closeMenu }) => {
  const menuStyle = {
    display: showMenu ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "#CC5F70", // Your preferred background color
    zIndex: 50,
    textAlign: "center",
    paddingTop: "100px", // Adjust this value for spacing
  };
  const variants = {
    visible: { x: 0, transition: { duration: 0.25, type: "spring" } },
    hidden: { x: 100 },
  };
  return (
    <motion.div
      style={menuStyle}
      animate={showMenu ? "visible" : "hidden"}
      variants={variants}
    >
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
    </motion.div>
  );
};

export default NavMenu;

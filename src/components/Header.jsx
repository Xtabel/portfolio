import React, { useState } from "react";
import image1 from "../assets/image1.gif";
import Typist from 'react-typist-component';
import SocialMedia from "./SocialMedia";

import "./some.css";
import "../styles/Header.scss";
import Menu from "./MenuIcon";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const Header = ({ handleClick, refs, hoverMedia }) => {
  const [showMenu, setShowMenu] = useState(null);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      document.body.style = "overflow: auto";
    } else document.body.style = "overflow: hidden";
  };
  const handleCloseMenu = (ref) => {
    setShowMenu(false);
    handleClick(ref);
    document.body.style = "overflow: auto";
  };
  const viewUXPortfolioHandler = () => {
    window.open(
      "https://uxfol.io/b14dec0a",
      "_blank",
      "noopener,noreferrer"
    );
  };
  

  const navLinks = [
    {
      name: "About",
      ref: "aboutRef",
    },
    {
      name: "Experience",
      ref: "experienceRef",
    },
    {
      name: "Projects",
      ref: "projectsRef",
    },
    {
      name: "Contact",
      ref: "contactRef",
    },
  ];

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const navVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 },
  };
  return (
    <div
      style={{
        borderBottom: "1px solid #1a1a1a",
        maxWidth: "1440px",
        margin: "auto",
        overflowX: "hidden",
        height: "100%",
      }}
      ref={refs}
    >
      <div className="containerBox">
        <div className={"header"}>
          <motion.div
            className="navlink"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks?.map((item, index) => (
              <motion.div variants={navVariants} key={index} custom={index}>
                <div className="thread">
                  <div
                    onClick={() => handleClick(item?.ref)}
                    className={`pendulum ${item?.name === "About" && " active"
                      }`}
                  >
                    {item?.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className={"menu"}>
          <Menu handleShowMenu={handleShowMenu} showMenu={showMenu} />
          <NavMenu showMenu={showMenu} closeMenu={handleCloseMenu} />
        </div>
        <div className={"heroSection"}>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={textVariants} className="textintro">
              Hello, my name is -
            </motion.h3>
            <motion.span variants={textVariants} className={"myname"}>
              <Typist typingDelay={100}>
                Christ
                <Typist.Delay ms={300} />
                abel Akpoguma.
              </Typist>
            </motion.span>
            <motion.span
              variants={textVariants}
              className={"otherIntroDetails"}
            >
              <motion.h4 variants={textVariants} className={"jobtype"}>
                Creative Front-end Engineer and Product Designer
              </motion.h4>
              <motion.p variants={textVariants} className={"jobtools"}>
                {/* I work with HTML, CSS , React JS, Adobe Photoshop, Adobe
                Illustrator, Adobe Indesign and Figma. */}
                I work with React JS, Material UI, Redux,
                and currently exploring React Native.

              </motion.p>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                className={"primaryActionButton"}
                onClick={viewUXPortfolioHandler}
              // href="https://linky.design/ChristabelAkpo-Portfolio"
              >
                View UX Portfolio
              </Button>
            </motion.span>
          </motion.div>
          <motion.div
            className={"primaryImageDiv"}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, stiffness: 100 }}
          >
            {" "}
            <img
              draggable={false}
              className={"primaryImage"}
              src={image1}
              alt="Creative"
            />
          </motion.div>
        </div>
      </div>
      <SocialMedia hover={hoverMedia} />
    </div>
  );
};
export default Header;

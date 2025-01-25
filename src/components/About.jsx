import React, { useState, useEffect } from "react";
import Hearts from "../assets/hearts.png";

import { motion, useInView } from "framer-motion";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import "../styles/About.scss"

const About = ({ refs }) => {
  const theme = useTheme();
  const isInView = useInView(refs, { margin: "-100px" });
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobiless, setMobiless] = useState(false);
  const mobilex = -100;
  const desktopx = -300;
  useEffect(() => {
    if (mobileScreen) {
      setMobiless(true);
    } else {
      setMobiless(false);
    }
  }, [mobileScreen]);
  const variants = {
    initial: {
      x: mobiless ? desktopx : mobilex,
      // y:100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      ref={refs}
      style={{
        padding: mobileScreen ? "0px" : "70px 30px 50px 30px",
        width: "100%",
        backgroundColor: "transparent",
        maxWidth: "1440px",
        margin: mobileScreen ? "30px 0px" : "auto",
        borderBottom: "1px solid #1a1a1a",
      }}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className="aboutDivTitle">
        <motion.div className="aboutText">
          <motion.div className="aboutTextRibbon"></motion.div>
          <motion.h2 style={{ fontFamily: "Alatsi, sans-serif" }}>
            About 🔍
          </motion.h2>
        </motion.div>
      </motion.div>
      <Box sx={{
        backgroundColor: "#FDFAFA", ...(mobileScreen && {
          width: "100%",
          overflowX: "hidden",
        })
      }}>
        <img
          src={Hearts}
          alt="hearts"
          style={{ position: "absolute", zIndex: "999", marginRight: "-30px" }}
        />
        <Box sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          gap: "100px",
          alignItems: "center", ...(mobileScreen && { display: "block", })
        }}>
          {!mobileScreen && (
            <div>
              <div className="img-thread">
                <div className="pendulum-img active"></div>
              </div>
            </div>
          )}
          <motion.div style={{ paddingTop: "50px", fontSize: "16px" }}>
            Hi, I’m a Front-end Engineer and Product Designer with a passion
            <br />
            for crafting innovative, user-centered products. I enjoy exploring new
            <br />
            technologies and tools to create solutions that are both functional and delightful.
            <br />
            Collaborating with creative minds to bring software ideas to life is what drives me. <br />
            <motion.p style={{ marginTop: "30px", marginBottom: "20px" }}>
              Technologies I use:
            </motion.p>
            <motion.div className="grid-container">
              <motion.div className="grid-item">
                <motion.div className="tools-div">REACT JS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Next JS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Redux Toolkit</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Material UI</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Ant Design</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">SASS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Typescript</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">GSAP</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Azure</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {mobileScreen && (
            <motion.div
              className={"imageMobileDiv"}
              variants={variants}
              initial="initial"
              animate={isInView && "animate"}
            >
              <motion.div className="imageMobile"></motion.div>
            </motion.div>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

export default About;

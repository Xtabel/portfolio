import React from "react";
import VerticalTabs from "./Tabs";
import "./some.css";
import { useInView, motion } from "framer-motion";
import "../styles/Experience.scss"
import { useMediaQuery, useTheme } from "@mui/material";


const Experience = ({ refs }) => {
  const theme = useTheme();
  const isInView = useInView(refs, { margin: "-100px" });
  const isInViewMobile = useInView(refs, { margin: "-10px" });
  const mobile = useMediaQuery(theme.breakpoints.down("md")); 

  const variants = {
    initial: {
      x: 500,
      // y:100,
      opacity: 0,
    },
    initialMobile:{
      x:20,
      opacity:0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      ref={refs}
      className={"experienceDiv"}
      variants={variants}
      initial={mobile?"initialMobile":"initial"}
      animate={!mobile?(isInView && "animate"):(isInViewMobile && "animate")}
      exit={{
        x: 500,
        y: 100,
        opacity: 0,
      }}
    >
      <motion.div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          marginBottom: "50px",
        }}
      >
        <motion.div
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <motion.div
            style={{
              width: "70px",
              height: "10px",
              backgroundColor: "#CC5F70",
            }}
          ></motion.div>
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Experience 📝</h2>
        </motion.div>
      </motion.div>
      <motion.div className="tabBg">
        <motion.div className="tabsSection">
          <motion.div className="tabsDiv">
            <VerticalTabs />
          </motion.div>
          <motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

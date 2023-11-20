import React from "react";
import VerticalTabs from "./Tabs";
import "./some.css";
import { makeStyles } from "@material-ui/core";
import { useInView, motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  experienceDiv: {
    padding: "70px 30px 50px 30px",
    width: "100%",
    // maxHeight: "100%",
    backgroundColor: "transparent",
    maxWidth: "1440px",
    margin: "auto",
    borderBottom: "1px solid #1a1a1a",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0px",
    },
  },
  tabsSection: {
    display: "flex",
    width: "100%",
    gap: "100px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      gap: "0px",
      display: "block",
    },
  },
  tabsDiv: {
    [theme.breakpoints.down("xs")]: {
      boxSizing: "border-box",
    },
  },
  tabBg: {
    backgroundColor: "#FDFAFA",
    [theme.breakpoints.down("xs")]: {
      overflowX: "hidden",
      width: "100%",
    },
  },
}));
const Experience = ({ refs }) => {
  const classes = useStyles();
  const isInView = useInView(refs, { margin: "-100px" });
  const variants = {
    initial: {
      x: 500,
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
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      ref={refs}
      className={classes.experienceDiv}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
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
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Experience</h2>
        </motion.div>
      </motion.div>
      <motion.div className={classes.tabBg}>
        <motion.div className={classes.tabsSection}>
          <motion.div className={classes.tabsDiv}>
            <VerticalTabs />
          </motion.div>
          <motion.div>
            {/* <div className="img-thread">
              <div className="pendulum-img active"></div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

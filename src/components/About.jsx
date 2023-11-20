import React, { useState, useEffect } from "react";
import Hearts from "../assets/hearts.png";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import profile3 from "../assets/profile3.jpg";
import { motion, useInView } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    padding: "70px 30px 50px 30px",
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: "1440px",
    margin: "auto",
    borderBottom: "1px solid #1a1a1a",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      margin: "30px 0px",
    },
  },
  aboutDivTitle: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: "50px",
  },
  aboutText: {
    gap: "10px",
    display: "flex",
    alignItems: "center",
  },
  aboutTextRibbon: {
    width: "70px",
    height: "10px",
    backgroundColor: "#CC5F70",
  },
  aboutContentContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    gap: "100px",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  imageMobileDiv: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "30px 0px",
  },
  imageMobile: {
    background: `url('${profile3}')`,
    // backgroundColor: "pink",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
    position: "relative",
    "&::before": {
      content: "'' !important",
      position: "absolute !important",
      top: "0 !important",
      left: "0 !important",
      borderWidth: "50px 50px 50px 50px !important",
      borderStyle: "solid !important",
      borderColor: "#CC5F70 transparent transparent #CC5F70 !important",
      color: "#fff !important",
    },
    "&::after": {
      content: "'' !important",
      position: "absolute !important",
      bottom: "0 !important",
      right: "0 !important",
      borderWidth: "50px 50px 50px 50px !important",
      borderStyle: "solid !important",
      borderColor: "transparent #CC5F70 #CC5F70 transparent !important",
    },
  },
  aboutBackground: {
    backgroundColor: "#FDFAFA",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      overflowX: "hidden",
    },
  },
}));
const About = ({ refs }) => {
  const classes = useStyles();
  const theme = useTheme();
  // const ref = useRef()
  const isInView = useInView(refs, { margin: "-100px" });
  const mobileScreen = useMediaQuery(theme.breakpoints.down("xs"));
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
      className={classes.aboutDiv}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
    >
      <motion.div className={classes.aboutDivTitle}>
        <motion.div className={classes.aboutText}>
          <motion.div className={classes.aboutTextRibbon}></motion.div>
          <motion.h2 style={{ fontFamily: "Alatsi, sans-serif" }}>
            About
          </motion.h2>
        </motion.div>
      </motion.div>
      <div className={classes.aboutBackground}>
        <img
          src={Hearts}
          alt="hearts"
          style={{ position: "absolute", zIndex: "999", marginRight: "-30px" }}
        />
        <div className={classes.aboutContentContainer}>
          {!mobileScreen && (
            <div>
              <div className="img-thread">
                <div className="pendulum-img active"></div>
              </div>
            </div>
          )}
          <motion.div style={{ paddingTop: "50px", fontSize: "16px" }}>
            Hi, I am a Front-end Engineer and a UI/UX Designer with a Graphic
            <br />
            Design background. As a creative, I love exploring new technologies
            <br />
            and tools to create delightful products outside the box. I love
            <br />
            interacting with creative minds to build software products. <br />
            <motion.p style={{ marginTop: "30px", marginBottom: "20px" }}>
              Technologies I use:
            </motion.p>
            <motion.div className="grid-container">
              <motion.div className="grid-item">
                <motion.div className="tools-div">REACT JS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Figma</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Material UI</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">SASS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Redux</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">TypeScript</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Azure</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Next JS</motion.div>
              </motion.div>
              <motion.div className="grid-item">
                <motion.div className="tools-div">Agile Methodology</motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {mobileScreen && (
            <motion.div
              className={classes.imageMobileDiv}
              variants={variants}
              initial="initial"
              animate={isInView && "animate"}
            >
              <motion.div className={classes.imageMobile}></motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;

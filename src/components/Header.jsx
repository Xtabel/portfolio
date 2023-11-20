import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import image1 from "../assets/image1.gif";
import Typist from "react-typist";
import SocialMedia from "./SocialMedia";

import "./some.css";
import Menu from "./MenuIcon";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    alignContent: "flex-start",
    overflowX: "hidden",
  },
  header: {
    padding: "30px",
    display: "flex",
    justifyContent: "end",
    width: "100%",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navlink: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "60%",
  },
  /*  content: {
    display:'flex',
    justifyContent:'center',
    padding: "50px 100px",
   [theme.breakpoints.down('md')]: {
    padding: "0px 0px",
      },
  }, */
  textintro: {
    fontFamily: "Charmonman, cursive",
    fontWeight: "light",
    transition: "1s fadein all",
  },
  myname: {
    fontSize: "60px",
    color: "#263238",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      fontSize: "55px",
      marginBottom: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginBottom: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "36px",
      marginBottom: "0px",
    },
  },
  jobtype: {
    color: "#263238",
    lineHeight: "50px",
    [theme.breakpoints.down("md")]: {
      lineHeight: "25px",
      marginTop: "10px",
    },
  },
  jobtools: {
    color: "#525252",
    width: "65%",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      width: "90%",
    },
  },
  primaryActionButton: {
    position: "relative",
    borderRadius: "0px",
    marginTop: "20px",
    fontFamily: "Alatsi, sans-serif",
    fontSize: "15px",
    padding: "10px 30px",
    "&:hover": {
      paddingRight: "50px",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      right: "-150px",
      left: "0px",
      transition: "opacity 0.3s",
      opacity: 0,
    },
    "&:hover::after": {
      content: '" >>"',
      animation: "$moveBackAndForth 0.3s ease-in-out infinite alternate",
      opacity: 1,
    },
  },
  "@keyframes moveBackAndForth": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(10px)",
    },
  },
  primaryImageDiv: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "end",
      margin: "20px 0px",
    },
  },
  primaryImage: {
    userDrag: "none",
    webkitUserDrag: "none",
    userSelect: "none",
    mozUserSelect: "none",
    webkitUserSelect: "none",
    msUserSelect: "none",
    width: "auto",
    height: "28rem",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "20rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      height: "200px",
    },
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 0,
    padding: "50px 50px",
    boxSizing: "border-box",
    [theme.breakpoints.down("sm")]: {
      /*   flexDirection:'column',
      justifyContent:'center', */
      marginBottom: "30px",
      padding: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginBottom: "30px",
      padding: "0px",
    },
  },
  menu: {
    display: "none",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30px",
      display: "flex",
      justifyContent: "flex-end",
      padding: "0px",
      width: "100%",
      overflow: "hidden",
    },
  },
}));

const Header = ({ handleClick }) => {
  const classes = useStyles();
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
      "https://linky.design/ChristabelAkpo-Portfolio",
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
    >
      <div className={classes.containerBox}>
        <div className={classes.header}>
          <motion.div
            className={classes.navlink}
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks?.map((item, index) => (
              <motion.div variants={navVariants} key={index} custom={index}>
                <div className="thread">
                  <div
                    onClick={() => handleClick(item?.ref)}
                    className={`pendulum ${
                      item?.name === "About" && " active"
                    }`}
                  >
                    {item?.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className={classes.menu}>
          <Menu handleShowMenu={handleShowMenu} showMenu={showMenu} />
          <NavMenu showMenu={showMenu} closeMenu={handleCloseMenu} />
        </div>
        <div className={classes.heroSection}>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3 variants={textVariants} className={classes.textintro}>
              Hello, my name is -
            </motion.h3>
            {/*     <Typist
              avgTypingDelay={80}
              startDelay={1000}
              cursor={{ hideWhenDone: true }}
            > */}
            <motion.span variants={textVariants} className={classes.myname}>
              Christabel <Typist.Delay ms={500} /> Akpoguma
            </motion.span>
            {/* </Typist> */}

            <motion.span
              variants={textVariants}
              className={classes.otherIntroDetails}
            >
              <motion.h4 variants={textVariants} className={classes.jobtype}>
                Product Designer and Creative Front-end Developer
              </motion.h4>
              <motion.p variants={textVariants} className={classes.jobtools}>
                I work with HTML, CSS , React JS, Adobe Photoshop, Adobe
                Illustrator, Adobe Indesign and Figma.
              </motion.p>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                className={classes.primaryActionButton}
                onClick={viewUXPortfolioHandler}
                // href="https://linky.design/ChristabelAkpo-Portfolio"
              >
                View UX Portfolio
              </Button>
            </motion.span>
          </motion.div>
          <motion.div
            className={classes.primaryImageDiv}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, stiffness: 100 }}
          >
            {" "}
            <img
              draggable={false}
              className={classes.primaryImage}
              src={image1}
              alt="Creative"
            />
          </motion.div>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};
export default Header;

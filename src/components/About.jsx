import React from "react";
import Hearts from "../assets/hearts.png";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import profile3 from "../assets/profile3.jpg";

const useStyles = makeStyles((theme) => ({
  aboutDiv: {
    padding: "70px 30px 30px 30px",
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
  const mobileScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div ref={refs} className={classes.aboutDiv}>
      <div className={classes.aboutDivTitle}>
        <div className={classes.aboutText}>
          <div className={classes.aboutTextRibbon}></div>
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>About</h2>
        </div>
      </div>
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
          <div style={{ paddingTop: "50px" }}>
            Hi, I am a Front-end Engineer and a UI/UX Designer with a Graphic
            <br />
            Design background. As a creative, I love exploring new technologies
            <br />
            and tools to create delightful products outside the box. I love
            <br />
            interacting with creative minds to build software products. <br />
            <p style={{ marginTop: "30px", marginBottom: "20px" }}>
              Technologies I use:
            </p>
            <div className="grid-container">
              <div className="grid-item">
                <div className="tools-div">REACT JS</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Figma</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Material UI</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">SASS</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Redux</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">TypeScript</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Azure</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Next JS</div>
              </div>
              <div className="grid-item">
                <div className="tools-div">Agile Methodology</div>
              </div>
            </div>
          </div>

          {mobileScreen && (
            <div className={classes.imageMobileDiv}>
              <div className={classes.imageMobile}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;

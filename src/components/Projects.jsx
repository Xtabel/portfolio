import { Box, Tooltip, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Project1 from "../assets/placeholderimg.png";
import Project2 from "../assets/placeholderimg2.png";
// import Project2 from "../assets/image5.png";
import Project3 from "../assets/placeholderimg3.png";
import Project4 from "../assets/placeholderimg4.png";
import Project5 from "../assets/placeholderimg5.png";
import "./projectstyles.css";
import MobileContent from "./Projects/MobileContent";
import { Icon } from "@iconify/react";

const MyProjects = [
  {
    id: 1,
    name: "WAEC Study Hub",
    subTitle:
      "A gamified e-Study application that offers the official WAEC study and test materials to equip students in West Africa for the WASSCE/GCE exams.",
    technologies: [
      "React JS",
      "Material UI",
      "Redux Thunk",
      "AI",
      "Tailwind CSS",
    ],
    image: Project5,
    link: "https://estudyapp.azurewebsites.net/",
  },
  {
    id: 2,
    name: "NYSC SAED Website",
    subTitle:
      "A web application that automates the process of the NYSC Skill Acquisition and Entrepreneurship Department in Nigeria.",
    technologies: ["React JS", "MUI", "GSAP", "SASS", "Redux Saga"],
    image: Project1,
    link: "https://saed.nysc.org.ng/",
  },
  {
    id: 3,
    name: "JM Tech Website",
    subTitle:
      "A web application that offers IT training to African youths in partnership with Microsoft initiative.",
    technologies: [
      "React JS",
      "Material UI",
      "Styled Components",
      "Context API",
    ],
    image: Project2,
    link: "https://jmtechcenter.org/",
  },
  {
    id: 4,
    name: "WAEC e-Registration Management Module",
    subTitle:
      "A management module for WAEC e-Registration admin management.  The web application handles all administrative operations involved in the WASSCE examination in West Africa.",
    technologies: [
      "React JS",
      "MUI",
      "React Dnd",
      "SASS",
      "Redux Saga",
      "Redux Persist",
    ],
    image: Project4,
    link: "https://waece-regmgtmodule.azurewebsites.net/",
  },
  {
    id: 5,
    name: "Careplus HMO",
    subTitle:
      "A multi-tenant HMO custom web and mobile solution providing the best means of handling all HMO operations.",
    technologies: ["React JS", "Material UI", "SASS", "Redux Saga"],
    image: Project3,
    link: "http://cplusportal.azurewebsites.net/",
  },
];

const useStyles = makeStyles((theme) => ({
  projectsSection: {
    padding: "70px 30px 30px 30px",
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: "1440px",
    margin: "auto",
    borderBottom: "1px solid #1a1a1a",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0px",
      margin: "30px 0px",
    },
  },
  projectsTitleSection: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: "50px",
  },
  myProjectsSection: {
    backgroundColor: "#FDFAFA",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    padding: "30px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      gap:"50px",
    },
  },

  leftRectangularBlock: {
    width: "80%",
    height: "100%",
    textAlign: "left",
    padding: "30px 0px",
    zIndex: "3",
    position: "relative",
    marginRight: "-70px",
  },
  displaySection: {
    display: "none",
    height: 0,
  },
  rightRectangularBlock: {
    width: "80%",
    height: "100%",
    /*  backgroundColor:'red', */ textAlign: "right",
    padding: "30px 0px",
    zIndex: "3",
    position: "relative",
    marginLeft: "-70px",
  },
  featuredProjectRectangle: {
    width: "100%",
    boxShadow: "rgb(144 144 144) 0px 10px 30px -15px",
    backgroundColor: "#CC5F70",
    padding: "30px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  listStyle: {
    display: "flex",
    justifyContent: "start",
    gap: "10px",
    listStyle: "none",
    flexWrap: "wrap",
  },

  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxShadow: "0px 1px 4px 1px rgba(178, 178, 178, 0.25)",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    [theme.breakpoints.only("md")]: {
      width: "100%",
      height: "100%",
      objectFit: "fill",
    },
  },
  linkBtn:{
    cursor:'pointer',
    '&:hover':{
      color:'#CC5F70 !important',
    }
  },
}));

const Projects = ({ refs }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box ref={refs} className={classes.projectsSection}>
      <Box className={classes.projectsTitleSection}>
        <Box
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              width: "70px",
              height: "10px",
              backgroundColor: "#CC5F70",
            }}
          ></Box>
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Projects</h2>
        </Box>
      </Box>

      {/* Content goes here */}

      <Box className={classes.myProjectsSection}>
        {/* new section */}
        {MyProjects?.map((item) => (
          <div key={item?.id}>
            {item?.id % 2 !== 0 ? (
              <div key={item?.id} style={{ display: "flex", height: "350px" }}>
                <div
                  className={
                    !mobileScreen
                      ? classes.leftRectangularBlock
                      : classes.displaySection
                  }
                >
                  <h4 style={{ marginBottom: "6px", color: "#CC5F70" }}>
                    Featured Project
                  </h4>
                  <h2 style={{ marginBottom: "20px" }}>{item?.name}</h2>
                  <div className={classes.featuredProjectRectangle}>
                    <p style={{ fontStyle: "18px", color: "#fff" }}>
                      {item?.subTitle}
                    </p>
                  </div>
                  <Box style={{ fontStyle: "13px" }}>
                    <ul className={classes.listStyle}>
                      {item?.technologies?.map((val, i) => {
                        return <li key={i}>{val}</li>;
                      })}
                    </ul>
                  </Box>
                  <Box style={{padding:'20px 0px'}}>
                  <Tooltip title="Visit site">
                    <a href={item?.link} rel="noopener noreferrer" target="_blank">
                  <Icon icon="quill:link-out" width={"30px"} height={"30px"} color='#212020' className={classes.linkBtn} />
                    </a>
                    </Tooltip>
                  </Box>
                </div>
                <div
                  className={
                    !mobileScreen ? "image-container" : "image-container-mobile"
                  }
                  onClick={() => handleImageClick(item?.link)}
                >
                  {mobileScreen&&<MobileContent content={item}/>}
                  <img
                    src={item?.image}
                    alt={`${item?.name}`}
                    className={classes.projectImage}
                  />
                </div>
              </div>
            ) : (
              <div key={item?.id} style={{ display: "flex", height: "350px" }}>
                <div
                  className={
                    !mobileScreen ? "image-container" : "image-container-mobile"
                  }
                  onClick={() => handleImageClick(item?.link)}
                >
                    {mobileScreen&&<MobileContent content={item}/>}
                  <img
                    src={item?.image}
                    alt={`${item?.name}`}
                    className={classes.projectImage}
                  />
                </div>
                <div
                  className={
                    !mobileScreen
                      ? classes.rightRectangularBlock
                      : classes.displaySection
                  }
                >
                  <h4 style={{ marginBottom: "6px", color: "#CC5F70" }}>
                    Featured Project
                  </h4>
                  <h2 style={{ marginBottom: "20px" }}>{item?.name}</h2>
                  <div className={classes.featuredProjectRectangle}>
                    <p style={{ fontStyle: "18px", color: "#fff" }}>
                      {item?.subTitle}
                    </p>
                  </div>
                  <Box style={{ fontStyle: "13px" }}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        gap: "10px",
                        listStyle: "none",
                        flexWrap: "wrap",
                      }}
                    >
                      {item?.technologies?.map((item, i) => {
                        return <li key={i}>{item}</li>;
                      })}
                    </Box>
                  </Box>
                  <Box style={{padding:'20px 0px'}}>
                  <Tooltip title="Visit site" color="red">
                   <a href={item?.link} rel="noopener noreferrer" target="_blank">
                  <Icon icon="quill:link-out" width={"30px"} height={"30px"} color='#212020' className={classes.linkBtn} />
                    </a>
                   </Tooltip>
                  </Box>
                </div>
              </div>
            )}
          </div>
        ))}
      </Box>

      {/* Content goes here */}
    </Box>
  );
};

export default Projects;

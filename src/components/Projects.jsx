import {
  Box,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Project1 from "../assets/placeholderimg.png";
import Project2 from "../assets/placeholderimg2.png";
// import Project2 from "../assets/image5.png";
import Project3 from "../assets/placeholderimg3.png";
import Project4 from "../assets/placeholderimg4.png";
import Project5 from "../assets/placeholderimg5.png";
import "./projectstyles.css";
import {
  useScroll,
  useSpring,
  motion,
  useTransform,
} from "framer-motion";
import WorkPortfolio from "./Projects/WorkPortfolio";

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
    padding: "70px 30px 50px 30px",
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: "1440px",
    margin: "auto",
    borderBottom: "1px solid #1a1a1a",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      padding: "30px 0px",
      margin: "30px 0px",
    },
  },
  stickyProjectsTitleSection: {
    position: "sticky",
    top: 0,
    zIndex: 99,
    background: "#fff",
    marginBottom: "50px",
    padding: "30px 0px 0px 0px",
  },
  projectsTitleSection: {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: "20px",
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
      gap: "50px",
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
    background: "none",
    [theme.breakpoints.only("md")]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.only("lg")]: {
      // background:'#fff',
    },
  },
  linkBtn: {
    cursor: "pointer",
    "&:hover": {
      color: "#CC5F70 !important",
    },
  },
}));

const Projects = ({ refs }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const { scrollYProgress } = useScroll({
    target: refs,
    // offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const background = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8, 1],
    ["#40499d", "#016c34", "#ff0000", "#40499d", "#6cc56f"]
  );

  return (
    <Box ref={refs} className={classes.projectsSection}>
      <Box className={classes.stickyProjectsTitleSection}>
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
        <motion.div
          style={{ scaleX, transformOrigin: "right", background }}
          className="myprogressBar"
        ></motion.div>
      </Box>

      {/* Content goes here */}

      <WorkPortfolio
        handleImageClick={handleImageClick}
        mobileScreen={mobileScreen}
        classes={classes}
        MyProjects={MyProjects}
      />
      {/* Content goes here */}
    </Box>
  );
};

export default Projects;

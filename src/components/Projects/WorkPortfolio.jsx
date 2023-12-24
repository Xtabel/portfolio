
import React, { useRef } from "react";
import { motion } from "framer-motion";
import MobileContent from "./MobileContent";
import FeaturedProjectRectangle from "./FeaturedProjectRectangle";
import { Box, Tooltip, styled } from "@mui/material";
import { Icon } from "@iconify/react";

const WorkPortfolio = ({
  classes,
  mobileScreen,
  handleImageClick,
  MyProjects,
  handleClick,
  ndaClass
}) => {
  const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const MyProjectsSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#FDFAFA",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    padding: "30px",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
      gap: "50px",
    },
  }));

  const ProjectImage = styled("img")(({ theme }) => ({
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
  }));
  const leftRectangularBlock = {
    width: "80%",
    height: "100%",
    textAlign: "left",
    padding: "30px 0px",
    zIndex: "3",
    position: "relative",
    marginRight: "-70px",
  }
  const displaySection = {
    display: "none",
    height: 0,
  }


  const rightRectangularBlock = {
    width: "80%",
    height: "100%",
    /*  backgroundColor:'red', */ textAlign: "right",
    padding: "30px 0px",
    zIndex: "3",
    position: "relative",
    marginLeft: "-70px",
  }
  const featuredProjectRectangle = {
    width: "100%",
    boxShadow: "rgb(144 144 144) 0px 10px 30px -15px",
    backgroundColor: "#CC5F70",
    padding: "30px",
    borderRadius: "5px",
    marginBottom: "20px",
  };
  const linkBtn = {
    cursor: "pointer",
    "&:hover": {
      color: "#CC5F70 !important",
    },
  }
  const listStyle = {
    display: "flex",
    justifyContent: "start",
    gap: "10px",
    listStyle: "none",
    flexWrap: "wrap",
  }
  const combinedStyles = {
    ...linkBtn,
    color: '#212020',
  };

  return (
    <MyProjectsSection>
      {/* new section */}
      {MyProjects?.map((item) => (
        <div key={item?.id} ref={ref}>
          {item?.id % 2 !== 0 ? (
            <div key={item?.id} style={{ display: "flex", height: "350px" }}>
              <motion.div
                // style={{y}}
                style={
                  !mobileScreen
                    ? leftRectangularBlock
                    : displaySection
                }
              >
                <FeaturedProjectRectangle item={item} style1={featuredProjectRectangle} style2={listStyle} style3={combinedStyles} ndaClass={ndaClass} />
              </motion.div>
              <div
                className={
                  !mobileScreen ? "image-container" : "image-container-mobile"
                }
                onClick={() => {
                  if (item?.link) {
                    handleImageClick(item?.link)
                  } else {
                    handleClick()
                  }
                }}
              >
                {mobileScreen && <MobileContent content={item} />}
                <ProjectImage
                  src={item?.image}
                  alt={`${item?.name}`}
                  draggable={false}
                // className={classes.projectImage}
                />
              </div>
            </div>
          ) : (
            <div key={item?.id} style={{ display: "flex", height: "350px" }}>
              <div
                className={
                  !mobileScreen ? "image-container" : "image-container-mobile"
                }
                onClick={() => {
                  if (item?.link) {
                    handleImageClick(item?.link)
                  }
                  else {
                    handleClick()
                  }
                }}
              >
                {mobileScreen && <MobileContent content={item} />}
                <ProjectImage
                  src={item?.image}
                  alt={`${item?.name}`}
                  draggable={false}
                // className={classes.projectImage}
                />
              </div>
              <div
                style={
                  !mobileScreen
                    ? rightRectangularBlock
                    : displaySection
                }
              >
                <h4 style={{ marginBottom: "6px", color: "#CC5F70" }}>
                  Featured Project
                </h4>
                <h2 style={{ marginBottom: "20px" }}>{item?.name}</h2>
                <div style={featuredProjectRectangle}>
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
                <Box style={{ padding: "20px 0px" }}>
                  <Tooltip title={item?.link && "Visit site"}>
                    <a href={item?.link} rel="noopener noreferrer" target="_blank" style={{ color: ndaClass ? "black" : "grey" }}>
                      {!item?.link ? <span className={ndaClass.toString()} style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}> <Icon icon="uim:padlock" style={combinedStyles} width={"30px"}
                        height={"30px"} /> NDA bound</span> :
                        <Icon
                          icon="quill:link-out"
                          width={"30px"}
                          height={"30px"}
                          style={combinedStyles}
                        />}
                    </a>
                  </Tooltip>
                </Box>
              </div>
            </div>
          )}
        </div>
      ))}
    </MyProjectsSection>
  );
};

export default WorkPortfolio;

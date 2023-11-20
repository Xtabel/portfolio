import { Box, Icon, Tooltip } from "@material-ui/core";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import MobileContent from "./MobileContent";
import FeaturedProjectRectangle from "./FeaturedProjectRectangle";

const WorkPortfolio = ({
  classes,
  mobileScreen,
  handleImageClick,
  MyProjects,
}) => {
  const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <Box className={classes.myProjectsSection}>
      {/* new section */}
      {MyProjects?.map((item) => (
        <div key={item?.id} ref={ref}>
          {item?.id % 2 !== 0 ? (
            <div key={item?.id} style={{ display: "flex", height: "350px" }}>
              <motion.div
                // style={{y}}
                className={
                  !mobileScreen
                    ? classes.leftRectangularBlock
                    : classes.displaySection
                }
              >
                <FeaturedProjectRectangle item={item} classes={classes} />
              </motion.div>
              <div
                className={
                  !mobileScreen ? "image-container" : "image-container-mobile"
                }
                onClick={() => handleImageClick(item?.link)}
              >
                {mobileScreen && <MobileContent content={item} />}
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
                {mobileScreen && <MobileContent content={item} />}
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
                <Box style={{ padding: "20px 0px" }}>
                  <Tooltip title="Visit site" color="red">
                    <a
                      href={item?.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon
                        icon="quill:link-out"
                        width={"30px"}
                        height={"30px"}
                        color="#212020"
                        className={classes.linkBtn}
                      />
                    </a>
                  </Tooltip>
                </Box>
              </div>
            </div>
          )}
        </div>
      ))}
    </Box>
  );
};

export default WorkPortfolio;

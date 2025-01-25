import { Icon } from "@iconify/react";
import { Box, Tooltip } from "@mui/material";
import React from "react";


const FeaturedProjectRectangle = ({ item, style1, style2, style3, ndaClass }) => {

  return (
    <React.Fragment>
      <h4 style={{ marginBottom: "6px", color: "#CC5F70" }}>
        Featured Project
      </h4>
      <h2 style={{ marginBottom: "20px" }}>{item?.name}</h2>
      <div style={style1}>
        <p style={{ fontStyle: "18px", color: "#fff" }}>{item?.subTitle}</p>
      </div>
      {item?.id % 2 !== 0 ? (
        <Box style={{ fontStyle: "13px" }}>
          <ul style={style2}>
            {item?.technologies?.map((val, i) => {
              return <li key={i}>{val}</li>;
            })}
          </ul>
        </Box>
      ) : (
        <Box style={{ fontStyle: "13px", }}>
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
      )}

      <Box style={{ padding: "20px 0px" }}>
        <Tooltip title={item?.link && "Visit site"}>
          <a href={item?.link} rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none', color: ndaClass?"black":"grey"}}>
            {!item?.link ? <span className={ndaClass.toString()} style={{ display: 'flex', alignItems: 'end' }}> <Icon icon="uim:padlock" style={style3} width={"30px"}
              height={"30px"} /> NDA bound</span> :
              <Icon
                icon="quill:link-out"
                width={"30px"}
                height={"30px"}
                // color=""
                style={style3}
              />}
          </a>
        </Tooltip>
      </Box>
    </React.Fragment>
  );
};

export default FeaturedProjectRectangle;

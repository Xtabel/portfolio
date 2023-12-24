import { Icon } from "@iconify/react";
import React from "react";

const thecontentDiv = {
  color: "#fff",
  padding: "30px",
  position: "absolute",
  zIndex: "7",
}
const titleHeader = {
  color: "#cc5f70",
}

const titleContent = {
  fontSize: "28px",
}

const textContentDiv = {
  padding: "25px 0px",
}
const content = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#acacac",
}
const listStyle = {
  display: "flex",
  justifyContent: "start",
  gap: "10px",
  listStyle: "none",
  flexWrap: "wrap",
}
const icondiv = {
  margin: "30px 0px",
  display: "flex",
  justifyContent: "end",
}

const MobileContent = ({ content }) => {
  //   const classes = useStyles();
  return (
    <div style={thecontentDiv}>
      <p style={titleHeader}>Featured Project</p>
      <h3 style={titleContent}>{content?.name}</h3>
      <div style={textContentDiv}>
        <p style={content}>
          {content?.subTitle.length > 150
            ? content.subTitle.slice(0, -100) + "..."
            : content?.subTitle}
        </p>
      </div>
      <div>
        <ul style={listStyle}>
          {content?.technologies?.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
      <div style={icondiv}>
        {!content?.link ? <span style={{ display: 'flex', justifyContent: 'end', alignItems: 'end' }}> <Icon icon="uim:padlock" width={"30px"}
          height={"30px"} /> NDA bound</span> :
          <Icon icon="quill:link-out" width={"30px"} height={"30px"} />}
      </div>
    </div>
  );
};

export default MobileContent;

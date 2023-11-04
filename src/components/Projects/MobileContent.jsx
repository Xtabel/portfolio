import { Icon } from "@iconify/react";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  thecontentDiv: {
    color: "#fff",
    padding: "30px",
    position: "absolute",
    zIndex: "7",
  },
  titleHeader: {
    color: "#cc5f70",
  },
  titleContent: {
    fontSize: "28px",
  },
  textContentDiv: {
    padding: "25px 0px",
  },
  content: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#acacac",
  },
  listStyle: {
    display: "flex",
    justifyContent: "start",
    gap: "10px",
    listStyle: "none",
    flexWrap: "wrap",
  },
  icondiv: {
    margin: "30px 0px",
    display: "flex",
    justifyContent: "end",
  },
}));
const MobileContent = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.thecontentDiv}>
      <p className={classes.titleHeader}>Featured Project</p>
      <h3 className={classes.titleContent}>{content?.name}</h3>
      <div className={classes.textContentDiv}>
        <p className={classes.content}>
          {content?.subTitle.length > 150
            ? content.subTitle.slice(0, -100) + "..."
            : content?.subTitle}
        </p>
      </div>
      <div>
        <ul className={classes.listStyle}>
          {content?.technologies?.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
      </div>
      <div className={classes.icondiv}>
        <Icon icon="quill:link-out" width={"30px"} height={"30px"} />
      </div>
    </div>
  );
};

export default MobileContent;

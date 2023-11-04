import React from "react";
import VerticalTabs from "./Tabs";
import './some.css';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    experienceDiv:{
      padding: "70px 30px 30px 30px",
      width: "100%",
      // maxHeight: "100%",
      backgroundColor: "transparent",
      maxWidth: '1440px',
      margin: 'auto',
      borderBottom: "1px solid #1a1a1a",
      boxSizing:'border-box',
      [theme.breakpoints.down('xs')]:{
        padding:'30px 0px',
        
      },
    },
    tabsSection:{
      display: "flex",
      width: "100%",
      gap: "100px",
      alignItems: "center",
      [theme.breakpoints.down('sm')]:{
      gap:'0px',
      display:'block',
      },
    },
    tabsDiv:{
      [theme.breakpoints.down('xs')]:{
        boxSizing:'border-box',
      },
    },
    tabBg:{
        backgroundColor: "#FDFAFA",
        [theme.breakpoints.down('xs')]:{
         overflowX:'hidden',
         width:'100%'
        },
    },
}))
const Experience = ({refs}) => {
  const classes= useStyles();
  return (
    <div
      ref={refs}
     className={classes.experienceDiv}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "10px",
              backgroundColor: "#CC5F70",
            }}
          ></div>
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Experience</h2>
        </div>
      </div>
      <div
       className={classes.tabBg}
      >
       
        <div
         className={classes.tabsSection}
        >
          
          <div className={classes.tabsDiv}>
            <VerticalTabs/>
           
          </div>
          <div>
            {/* <div className="img-thread">
              <div className="pendulum-img active"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

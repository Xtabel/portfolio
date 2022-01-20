import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import image from "../assets/image.gif";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import "./some.css";


const theme = createTheme({
  palette:{
    primary:{
      main:'#CC5F70',
    },
    secondary:{
      main:'#263238',
    }
  }
});

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "30px",
    display: "flex",
    justifyContent: "end",
    width: "100%",
    // backgroundColor: "red",
    height: "20vh",
    overflow: "hidden",
  },
  navlink: {
    display: "flex",
    justifyContent: "space-evenly",
    // backgroundColor:'blue',
    width: "60%",
  },
  content: {
    padding: "50px 100px",
  },
  textintro: {
    fontFamily: "Charmonman, cursive",
    fontWeight: "light",
  },
  myname: {
    fontSize: "60px",
    color: "#263238",
    marginBottom: "20px",
  },
  jobtype: {
    color: "#263238",
    lineHeight: "50px",
  },
  jobtools: {
    color: "#525252",
    width: "65%",
  },
  
}));

const Header = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
      <div className={classes.header}>
        <div className={classes.navlink}>
          <div>
            <div className="thread">
              <div className="pendulum active">About</div>
            </div>
          </div>
          <div>
            {" "}
            <div className="thread">
              <div className="pendulum">Experience</div>
            </div>
          </div>
          <div>
            {" "}
            <div className="thread">
              <div className="pendulum">Projects</div>
            </div>
          </div>
          <div>
            <div className="thread">
              <div className="pendulum">Contact</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={7}>
            <h3 className={classes.textintro}>Hello, my name is -</h3>
            <p className={classes.myname}>Christabel Akpoguma</p>
            <span className={classes.otherIntroDetails}>
              <h4 className={classes.jobtype}>
                Product Designer and Creative Front-end Developer
              </h4>
              <p className={classes.jobtools}>
                I work with HTML, CSS , React JS, Adobe Photoshop, Adobe
                Illustrator, Adobe Indesign and Figma.
              </p>
              <Button style={{  borderRadius:'0px',  marginTop:'20px',
   fontFamily:'Alatsi, sans-serif', fontSize:"15px", padding:'10px 30px'}}variant="contained" disableElevation color="primary">
              View  UX Portfolio
              </Button>
              
            </span>
          </Grid>
          <Grid item xs={12} sm={3}>
            <img className="primaryImage" src={image} alt="Creative" />
          </Grid>
        </Grid>
      </div>
    </div>
    </ThemeProvider>
    
  );
};
export default Header;

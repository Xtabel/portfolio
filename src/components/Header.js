import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import image from '../assets/image.gif';

import './some.css';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "30px",
    display: "flex",
    justifyContent:"end",
    width: "100%",
    // backgroundColor: "red",
    height: "20vh",
    overflow:'hidden'
  },
  navlink:{
    display:'flex',
    justifyContent:'space-evenly',
    // backgroundColor:'blue',
    width:'60%',
  },
  content:{
    padding:'50px 100px',
  },
  textintro:{
    fontFamily: 'Charmonman, cursive',
    fontWeight:'light',
  },
  myname:{
    fontSize:'60px',
    color:'#263238',
    marginBottom:'20px',
  },
  jobtype:{
    color:'#263238',
    lineHeight:"50px"
  },
  jobtools:{
    color:'#525252',
    width:'65%'
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
   <div>
      <div className={classes.header}>
      <div className={classes.navlink}>
        <div>
        <div className="thread">
          <div className="pendulum active">About</div>
        </div>
        </div>
      <div>  <div className="thread">
          <div className="pendulum">Experience</div>
        </div></div>
      <div> <div className="thread">
          <div className="pendulum">Projects</div>
        </div></div>
       <div>
        <div className="thread">
          <div className="pendulum">Contact</div>
        </div></div>
      </div>
      </div>
      <div className={classes.content}>
        <Grid container spacing={3}>
          <Grid item xs={7} sm={7}>
             <h3 className={classes.textintro} >Hello, my name is -</h3>
             <p className={classes.myname}>Christabel Akpoguma</p>
             <span className={classes.otherIntroDetails}>
               <h4 className={classes.jobtype}>Product Designer and Creative Front-end Developer</h4>
               <p className={classes.jobtools}>I work with HTML, CSS , React JS, Adobe Photoshop,  Adobe Illustrator,
 Adobe Indesign and Figma.</p>
             </span>
          </Grid>
          <Grid item xs={3} sm={3}>
              <img src={image} alt="Creative"/>
          </Grid>
        </Grid>
      </div>
   </div>
   
  );
};
export default Header;

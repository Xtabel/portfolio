import React from "react";
import { makeStyles } from "@mui/styles";
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
}));

const Header = () => {
  const classes = useStyles();
  return (
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
   
  );
};
export default Header;

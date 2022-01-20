import React from "react";
import homebg from '../assets/homebg.png';
import Header from "../components/Header";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    Container: {
        height:'100vh',
        width:"100%",
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"

    },
}));


const HomePage = () =>{
    const classes = useStyles()
    return(
        <div className={classes.Container}>
        <Header/>
        </div>
    );
}
export default HomePage;

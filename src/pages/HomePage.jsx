import React from "react";
import Header from "../components/Header";


const HomePage = ({ScrollIntoView}) => {
  return (
    <Header handleClick={ScrollIntoView}/>
  );
};
export default HomePage;

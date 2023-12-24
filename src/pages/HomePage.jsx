import React from "react";
import Header from "../components/Header";

const HomePage = ({ ScrollIntoView, refs, handleHoverMedia }) => {
  return <Header handleClick={ScrollIntoView} refs={refs} hoverMedia={handleHoverMedia}/>;
};
export default HomePage;

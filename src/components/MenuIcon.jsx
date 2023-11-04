import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Box, IconButton } from "@material-ui/core";
import Hamburger from 'hamburger-react'

const Menu = ({showMenu, handleShowMenu}) => {

  return (
    <Box style={{zIndex:20}}>
    <Hamburger toggled={showMenu} toggle={handleShowMenu} color={!showMenu?"#CC5F70":"#fff"} rounded label="Show menu"/>
    </Box>
    );
};

export default Menu;

import React from "react";

import Hamburger from "hamburger-react";
import { Box } from "@mui/material";

const Menu = ({ showMenu, handleShowMenu }) => {
  return (
    <Box style={{ zIndex: 55, ...(showMenu && { position: "fixed" }) }}>
      <Hamburger
        toggled={showMenu}
        toggle={handleShowMenu}
        color={!showMenu ? "#CC5F70" : "#fff"}
        rounded
        label="Show menu"
      />
    </Box>
  );
};

export default Menu;

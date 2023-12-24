import React, { useEffect, useState } from "react";

import "./cursor.css";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("xs"));
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className={!mobileScreen && "cursor"}
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};

export default Cursor;

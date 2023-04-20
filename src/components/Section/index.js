import React from "react";
import styles from "./Section.module.css";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Title from "./Title";
const Section = () => {
  return (
    <Box sx={{ p: 2, height: 493 + "px", border: "1px dashed grey" }}>
      <Subtitle />
      <Title />
    </Box>
  );
};

export default Section;

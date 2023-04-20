import React from "react";
import styles from "./Section.module.css";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Title from "./Title";
import ActionAreaCard from "../Card";
const Section = (props) => {
  return (
    <Box sx={{ p: 5, height: 60 + "px", border: "1px  grey" }}>
      <Subtitle subTitle={props.subTitle} />
      <Title title={props.title}time={props.time}/>
     
     
    </Box>
  );
};

export default Section;

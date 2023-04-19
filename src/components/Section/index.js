import React from "react";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Card from "../Card";
import Title from "./Title";
<<<<<<< HEAD
import { Stack } from "@mui/material";
const Section = () => {
  return (
    <Box sx={{ p: 2, border: "1px solid grey" }}>
      <Subtitle />
      <Title />
      <Stack direction="row" spacing={3.75}>
        {arr.map((e) => {
          return <Card />;
        })}
      </Stack>
=======
import ActionAreaCard from "../Card";
const Section = (props) => {
  return (
    <Box sx={{ p: 5, height: 60 + "px", border: "1px  grey" }}>
      <Subtitle subTitle={props.subTitle} />
      <Title title={props.title}time={props.time}/>
     
     
>>>>>>> be7c878f4bd5bca2e7786ab19e0a70a450836d6b
    </Box>
  );
};

export default Section;
const arr = [{}, {}, {}, {}];

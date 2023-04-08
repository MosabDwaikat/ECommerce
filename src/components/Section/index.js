import React from "react";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Card from "../Card";
import Title from "./Title";
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
    </Box>
  );
};

export default Section;
const arr = [{}, {}, {}, {}];

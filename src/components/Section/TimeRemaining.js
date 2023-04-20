import React from "react";
import styles from "./Section.module.css";

import TimePanel from "./TimePanel";
import { Stack } from "@mui/material";
import TwoDots from "./TwoDots";

const TimeRemaining = ({ viewTime }) => {
  console.log(viewTime);
  return (
    <Stack marginLeft={87 + "px"} direction="row" display={!viewTime && "none"}>
      <TimePanel />
      <TwoDots /> <TimePanel /> <TwoDots />
      <TimePanel /> <TwoDots />
      <TimePanel />
    </Stack>
  );
};

export default TimeRemaining;

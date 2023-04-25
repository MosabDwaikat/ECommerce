import React from "react";
import styles from "./Section.module.css";

import TimePanel from "./TimePanel";
import { Stack } from "@mui/material";
import TwoDots from "./TwoDots";

const TimeRemaining = ({ viewTime, time }) => {
  return (
    <Stack marginLeft={87 + "px"} direction="row" display={!viewTime && "none"}>
      <TimePanel keyword="Days" time={time && time[0]} />
      <TwoDots /> <TimePanel keyword="Hours" time={time && time[1]} />{" "}
      <TwoDots />
      <TimePanel keyword="Minutes" time={time && time[2]} /> <TwoDots />
      <TimePanel keyword="Seconds" time={time && time[3]} />
    </Stack>
  );
};

export default TimeRemaining;

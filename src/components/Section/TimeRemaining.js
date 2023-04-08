import React from "react";
import styles from "./Section.module.css";

import TimePanel from "./TimePanel";
import { Stack } from "@mui/material";
import TwoDots from "./TwoDots";

const TimeRemaining = () => {
  return (
    <Stack marginLeft={87 + "px"} direction="row">
      <TimePanel />
      <TwoDots /> <TimePanel /> <TwoDots />
      <TimePanel /> <TwoDots />
      <TimePanel />
    </Stack>
  );
};

export default TimeRemaining;

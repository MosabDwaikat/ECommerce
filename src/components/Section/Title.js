import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import TimeRemaining from "./TimeRemaining";
const Title = ({ title, viewTime }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={600}
        fontSize={36 + "px"}
        lineHeight={48 + "px"}
        color={"#000000"}
        marginTop={24 + "px"}
      >
        {title || "Title of section"}
      </Typography>
      <TimeRemaining viewTime={viewTime} />
    </Stack>
  );
};

export default Title;

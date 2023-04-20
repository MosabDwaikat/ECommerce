import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import TimeRemaining from "./TimeRemaining";
const Title = (props) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={300}
        fontSize={30 + "px"}
        lineHeight={48 + "px"}
        color={"#000000"}
        marginTop={24 + "px"}
      >
       {props.title}
      </Typography>
      {props.time}
    </Stack>
  );
};

export default Title;

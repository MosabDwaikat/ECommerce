import { Stack, Typography } from "@mui/material";
import React from "react";

const TimePanel = ({ time, keyword }) => {
  return (
    <Stack>
      <Typography
        fontFamily={"Poppins"}
        fontStyle={"normal"}
        fontWeight={500}
        fontSize={12 + "px"}
        lineHeight={18 + "px"}
        color={"#000000"}
        // marginTop={24 + "px"}
      >
        {keyword}
      </Typography>
      <Typography
        fontFamily={"Inter"}
        fontStyle={"normal"}
        fontWeight={700}
        fontSize={32 + "px"}
        lineHeight={30 + "px"}
        color={"#000000"}
        // marginTop={24 + "px"}
      >
        {time && time.toString().padStart(2, "0")}
      </Typography>
    </Stack>
  );
};

export default TimePanel;

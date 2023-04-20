import React from "react";
import styles from "./Section.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Subtitle = ({ subtitle }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box className={styles.subtitleBox} />
      <Typography
        fontFamily={"Poppins"}
        fontStyle={"normal"}
        fontWeight={900}
        fontSize={16 + "px"}
        lineHeight={20 + "px"}
        color={"#DB4444"}
      >
        {subtitle || "subtitle"}
      </Typography>
    </Stack>
  );
};

export default Subtitle;

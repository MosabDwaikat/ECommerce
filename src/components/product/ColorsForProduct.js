import React from "react";
import "./style.css";
import product from "./index";
import { Typography, Stack, Avatar, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { lightBlue } from "@mui/material/colors";

const SizeForProduct = (props) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
      <Typography variant="h5">Colors:</Typography>
      <Box
        sx={{
          width: 25,
          height: 25,
          backgroundColor: "lightBlue",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          width: 25,
          height: 25,
          backgroundColor: "lightPink",
          borderRadius: "50%",
        }}
      />{" "}
    </Stack>
  );
};
export default SizeForProduct;

import React from "react";
import Carousel from "./Carousel";
import MyBox from "./Mybox";
import { Divider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import MyMenu from "./Menu";
const Carousalandmenu = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "raw",
          justifyContent: "flex-start",
        }}
      >
        <Divider orientation="horizontal" flexItem />
        <MyMenu></MyMenu>
        <Divider orientation="vertical" flexItem />
        <Carousel />
      </Box>
    </div>
  );
};

export default Carousalandmenu;

import React from "react";

import { Typography, Stack, Rating, Divider } from "@mui/material";

import Product from "../product";
import Section from "../Section";

const SecondPage = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ mt: 1 }}>
      <Product />
      {/* <Section subTitle={"Related Items"} title="" /> */}
    </Stack>
  );
};

export default SecondPage;

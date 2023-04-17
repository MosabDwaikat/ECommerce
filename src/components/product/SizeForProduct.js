import React from "react";
import "./style.css";
import { Typography, Stack, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "black" ? "black" : "#fff",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: "center",


}));

const ColorsForProduct = (props) => {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
      <Typography variant="h5">Size:</Typography>
      <Item>XS</Item>
      <Item>S</Item>
      <Item>M</Item>
      <Item>L</Item>
      <Item>XL</Item>
    </Stack>
  );
};
export default ColorsForProduct;

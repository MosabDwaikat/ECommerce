import productsData from "../Card/data";

import { Stack } from "@mui/material";

import React, { useState } from "react";

import SingleCard from "./SingleCard";
import RelatedItems from "./RelatedItems";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));
export default function GridCards() {
  const [likes, setLikes] = useState(0);

  return (
    <Box>
    <Stack direction={"column"}  sx={{ flexGrow: 1,ml:8}}>
      <Grid container spacing={8}>
        {productsData.slice(0, 4).map((val, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index} >
            <SingleCard
              likes={likes}
              setLikes={setLikes}
              id={val.id}
              price={val.price}
              title={val.title}
              image={val.image}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{mt:9}}></Box>
      <Grid container spacing={8}>
        {productsData.slice(4, 8).map((val, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index} >
            <SingleCard
              likes={likes}
              setLikes={setLikes}
              id={val.id}
              price={val.price}
              title={val.title}
              image={val.image}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
    </Box>
  );
}
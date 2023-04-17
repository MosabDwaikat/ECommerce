import productsData from "../Card/data";

import { Stack } from "@mui/material";

import React, { useState } from "react";

import SingleCard from "./SingleCard";

export default function ActionAreaCard() {
  const [likes, setLikes] = useState(0);
  return (
    <Stack direction={"row"} spacing={2} width={5000} sx={{mt:1}}>
      {productsData.map((val) => {
        return (
        <SingleCard likes={likes} setLikes={setLikes} id={val.id} price={val.price} title={val.title} image={val.image}/>
        );
      })}
    </Stack>
  );
}

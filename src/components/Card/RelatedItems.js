import productsData from "../Card/data";

import { Stack ,Box} from "@mui/material";
import { shuffle } from "lodash";

import React, { useState } from "react";

import SingleCard from "./SingleCard";

export default function RelatedItems(props) {
  const [likes, setLikes] = useState(0);
  const randomProducts = shuffle(productsData).slice(0, 4);

  return (
    <Box  sx={{ mr: 40 }}>
      <Stack direction={"row"} spacing={6} width={5000} sx={{ mx: 10,mt:3}}>
        {randomProducts.map((val) => {
          return (
            <SingleCard
              likes={likes}
              setLikes={setLikes}
              id={val.id}
              price={val.price}
              title={val.title}
              image={val.image}
          
            />
          );
        })}
      </Stack>
    </Box>
  );
}

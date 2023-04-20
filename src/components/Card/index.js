import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import productsData from "./data";
import SingleCard from "./SingleCard";

const Card = () => {
  //to use props just use  productItems.name or price ...
  const [likes, setLikes] = useState(0);

  return (
    <Box>
      <Stack direction={"row"} spacing={2} width={5000} sx={{ mt: 5 }}>
        {productsData.map((val) => {
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
        {/* <RelatedItems/> */}
      </Stack>
    </Box>
  );
};

export default Card;

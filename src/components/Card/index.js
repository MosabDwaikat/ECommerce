import react from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ productItems }) => {
  //to use props just use  productItems.name or price ...

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

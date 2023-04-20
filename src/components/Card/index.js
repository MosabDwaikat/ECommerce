<<<<<<< HEAD
import react from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({ productItems }) => {
  //to use props just use  productItems.name or price ...
=======
import productsData from "../Card/data";

import { Stack } from "@mui/material";
import Slider from "react-slick";
import React, { useState } from "react";
>>>>>>> be7c878f4bd5bca2e7786ab19e0a70a450836d6b

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
export default function ActionAreaCard() {
  const [likes, setLikes] = useState(0);
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
<<<<<<< HEAD
    <>
      <div className="box">
        <div className="product mtop">
          <div className="img">
            <span className="discount">{"20"}% Off</span>
            <img src="./images/flash-4.png" alt="" />
            <div className="product-like">
              <FavoriteIcon />
              <VisibilityIcon />
            </div>
            <div className="add-to-cart">
              <button>{"add to cart"}</button> <br />
            </div>
          </div>
          <div className="product-details">
            <h3>{"watch"}</h3>
            <div className="price">
              <h4>${"50"}.00 </h4> <h4 className="oldPrice ">${"50"}.00 </h4>
            </div>{" "}
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
=======
    <Box >
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
}
>>>>>>> be7c878f4bd5bca2e7786ab19e0a70a450836d6b

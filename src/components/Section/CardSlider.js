import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";
import styles from "./Section.module.css";
import SingleCard from "../Card/SingleCard";
import { useState } from "react";
import Category from "../Category";

const CardSlider = ({
  topRightCorner,
  rows,
  cardsViewed,
  products,
  isCategories,
}) => {
  var settings = {
    arrows: false,
    rows: rows,
    dots: false,
    infinite: false,
    speed: 500,
    margin: 30,
    slidesToShow: cardsViewed,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let slider;
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <Slider ref={(c) => (slider = c)} {...settings} className="Slider">
        {isCategories === false &&
          products.map((element, index) => {
            return (
              <div className="Slide" key={index}>
                <div className="x">
                  {/* //put card here */}
                  {/* <h3>{element.title}</h3> */}
                  <SingleCard
                    likes={likes}
                    setLikes={setLikes}
                    id={element.id}
                    price={element.price}
                    title={element.title}
                    image={element.image}
                  />
                </div>
              </div>
            );
          })}
        {isCategories === true &&
          products.map((element, index) => {
            return (
              <div className="Slide" key={index}>
                <div className="x">
                  {/* //put card here */}
                  {/* <h3>{element.title}</h3> */}
                  <Category />
                </div>
              </div>
            );
          })}
        {topRightCorner === "slider-buttons" && (
          <div className="btn-div">
            <button className="btn" onClick={previous}>
              <WestIcon />
            </button>
            <button className="btn" onClick={next}>
              <EastIcon />
            </button>
          </div>
        )}
        {topRightCorner === "button" && (
          <Button
            variant="contained"
            color="error"
            className="topBtn"
            sx={{ margin: "auto" }}
          >
            View All
          </Button>
        )}
      </Slider>
    </div>
  );
};

export default CardSlider;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

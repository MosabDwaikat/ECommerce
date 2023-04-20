import React from "react";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Card from "../Card";
import Title from "./Title";
import { Stack } from "@mui/material";
import CardSlider from "./CardSlider";
import Button from "@mui/material/Button";
import styles from "./Section.module.css";

const Section = ({
  title,
  subtitle,
  viewTime,
  viewBottomButton,
  topRightCorner,
  cardsViewed,
  singleBox = false,
  isCategories = false,
  products,
  rows,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ p: 2, border: "1px dashed grey", maxWidth: 1440 + "px" }}
    >
      <Subtitle subtitle={subtitle} />
      <Title title={title} viewTime={viewTime} />
      {singleBox === false && (
        <CardSlider
          topRightCorner={topRightCorner}
          rows={rows}
          cardsViewed={cardsViewed}
          products={products}
          isCategories={isCategories}
        />
      )}
      {singleBox === true && products}
      {/* {isCategories===true&& products} */}
      <Button
        variant="contained"
        color="error"
        className={styles.btn}
        sx={{ margin: "auto", display: !viewBottomButton && "none" }}
      >
        View All Products
      </Button>
    </Box>
  );
};

export default Section;
const arr = [{}, {}, {}, {}];

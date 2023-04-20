import React from "react";
import styles from "./Section.module.css";
import Subtitle from "./Subtitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Title from "./Title";
import CardSlider from "./CardSlider";
import Button from "@mui/material/Button";

const Section = ({
  title,
  subtitle,
  viewTime,
  viewBottomButton,
  topRightCorner,
  cardsViewed,
  products,
  rows,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      sx={{ p: 2, border: "1px dashed grey" }}
    >
      <Subtitle subtitle={subtitle} />
      <Title title={title} viewTime={viewTime} />
      <CardSlider
        topRightCorner={topRightCorner}
        rows={rows}
        cardsViewed={cardsViewed}
        products={products}
      />
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

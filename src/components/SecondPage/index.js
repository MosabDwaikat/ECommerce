import React from "react";

import { Typography, Stack, Rating, Divider } from "@mui/material";

import Product from "../product";
import Section from "../Section";
import productsData from "../Card/data";
import Header from "../Header";
import Footer from "../Footer";
const SecondPage = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ mt: 1 }}>
      <Header />
      <Product />
      <Section
        subtitle="Related Items"
        title={" "}
        cardsViewed={4}
        rows={1}
        viewTime={false}
        viewBottomButton={false}
        topRightCorner={"none"} //slider-buttons or button
        products={productsData}
      />
      <Footer />
    </Stack>
  );
};

export default SecondPage;

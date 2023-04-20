import React from "react";

import { Typography, Stack, Rating, Divider } from "@mui/material";

import Product from "../product";
import Section from "../Section";
import RelatedItems from "../Card/RelatedItems";
import TimeRemaining from "../Section/TimeRemaining";
import ActionAreaCard from "../Card";
import GridCards from "../Card/GridCards";
import Features from "../Features";

import productsData from "../Card/data";

const HomePage = () => {
  return (
    <Stack direction="column" spacing={4} sx={{ mt: 1, ml: 7 }}>
      <>carousal and menu </>
      <Section
        title={"Flash Sales"}
        subtitle={"today's"}
        cardsViewed={4.5}
        rows={1}
        viewTime={true}
        viewBottomButton={true}
        topRightCorner={"slider-buttons"} //slider-buttons or button
        products={productsData}
      />
      {/* <ActionAreaCard /> */}
      <>button</>
      <Divider width={"80%"} sx={{ m: 8 }} />
      <Section
        title="Browse By Category"
        subtitle="Categories"
        cardsViewed={4.5}
        rows={1}
        viewTime={false}
        viewBottomButton={false}
        topRightCorner={"slider-buttons"} //slider-buttons or button
        products={productsData}
      />
      <>button's caltalog</>
      <Section
        title="Best Selling Products"
        subtitle="This Month"
        cardsViewed={4}
        rows={1}
        viewTime={false}
        viewBottomButton={false}
        topRightCorner={"button"} //slider-buttons or button
        products={productsData}
      />
      {/* <RelatedItems path="/products/:id" /> */}
      <Divider width={"80%"} sx={{ m: 8 }} />
      <> caltalog with image </>
      <Section
        title="Explore Our Products"
        subtitle="Our Products"
        cardsViewed={4}
        rows={2}
        viewTime={false}
        viewBottomButton={true}
        topRightCorner={"slider-buttons"} //slider-buttons or button
        products={productsData}
      />
      {/* <GridCards /> */}
      <>button</>
      {/* <Divider width={"80%"} sx={{ m: 8 }} /> */}
      <Section
        title="New Arrival"
        subtitle="Featured"
        cardsViewed={1}
        rows={1}
        viewTime={false}
        viewBottomButton={false}
        topRightCorner={"none"} //slider-buttons or button
        products={[productsData[0]]}
      />
      <>images for new arrival</>
      {/* <Features /> */}
    </Stack>
  );
};

export default HomePage;
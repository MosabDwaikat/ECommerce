import React from "react";

import { Typography, Stack, Rating, Divider } from "@mui/material";

import Product from "../product";
import Section from "../Section";
import RelatedItems from "../Card/RelatedItems";
import TimeRemaining from "../Section/TimeRemaining";
import ActionAreaCard from "../Card";
import GridCards from "../Card/GridCards";
import Features from "../Features";
import Carousalandmenu from "../Carousalandmenu";

const HomePage = () => {
  return (


    < Stack direction="column" spacing={4} sx={{ mt: 1, ml: 7 }}>
      <Divider orientation="horizontal" flexItem />
      <Carousalandmenu />
      <Section title="Flash Sales" subTitle="today's" time={<TimeRemaining />} />
      <ActionAreaCard />
      <>button</>
      <Divider width={"80%"} sx={{ m: 8 }} />
      <Section title="Browse By Category" subTitle="catalog" time={<>arrows component</>} />
      <>button's caltalog</>
      <Section title="Best Selling Products" subTitle="This Month" time={<>button</>} />
      <RelatedItems path="/products/:id" />
      <Divider width={"80%"} sx={{ m: 8 }} />
      <> caltalog with image </>
      <Section title="Explore Our Products" subTitle="Our Products" time={<>arrows component</>} />
      <GridCards />
      <>button</>
      <Divider width={"80%"} sx={{ m: 8 }} />
      <Section title="Featured" subTitle="New Arrival" />
      <>images for new arrival</>
      <Features />








    </Stack>

  );
};

export default HomePage;

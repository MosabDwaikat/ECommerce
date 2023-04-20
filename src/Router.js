import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Layout from "./Pages/Layout";
import ActionAreaCard from "./components/Card/index";
import Product from "./components/product";
import Features from "./components/Features";
import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";
import productsData from "./components/Card/data";
import Category from "./components/Category";
const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage />} />
        <Route path="/products" element={<ActionAreaCard />} />
        <Route path="/products/:id" element={<SecondPage />} /> */}
        <Route index element={<HomePage />} />
        <Route
          path="section"
          element={
            <Section
              title={"Title of section"}
              subtitle={"subtitle"}
              cardsViewed={4}
              rows={2}
              viewTime={true}
              viewBottomButton={true}
              topRightCorner={"slider-buttons"} //slider-buttons or button
              products={productsData}
            />
          }
        />
        <Route path="x" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

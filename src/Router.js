import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Layout from "./Pages/Layout";
import ActionAreaCard from "./components/Card/index";
import Product from "./components/product";
import Features from "./components/Features";
import SecondPage from "./components/SecondPage";
import HomePage from "./components/HomePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
          
        <Route path="/" element={<Layout />}>
<<<<<<< HEAD
          <Route
            index
            element={
              <Section
                title={"Title of section"}
                subtitle={"subtitle"}
                cardsViewed={4}
                rows={2}
                viewTime={true}
                viewBottomButton={true}
                topRightCorner={"slider-buttons"} //slider-buttons or button
                products={products}
              />
            }
          />
=======
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ActionAreaCard />} />
          <Route path="/products/:id" element={<SecondPage />} />

>>>>>>> 1a17fc7dcb5a36a0345d0db3c6dc3a34b74126a8
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

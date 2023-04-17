import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Layout from "./Pages/Layout";
import ActionAreaCard from "./components/Card/index";
import Product from "./components/product";
import Features from "./components/Features";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Section />} />
          <Route path="/products" element={<ActionAreaCard />} />
          <Route path="/products/:id" element={<Product />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

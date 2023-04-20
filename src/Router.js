import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Layout from "./Pages/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Section />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

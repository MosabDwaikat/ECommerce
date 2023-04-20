import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "./components/Section";
import Layout from "./Pages/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

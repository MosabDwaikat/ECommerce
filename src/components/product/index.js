import React from "react";

import ProductDetails from "./ProductDetails.js";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router";
import CardMedia from "@mui/material/CardMedia";

import { useState, useEffect } from "react";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading...</>;
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Stack direction="row" spacing={10} sx={{ mt: 10 }}>
          <Stack direction="column" spacing={1} sx={{ mt: 2, ml: 10 }}>
            {[1, 2, 3, 4].map((index) => {
              return (
                <CardMedia
                component="img"
                  sx={{ height: 138, width: 170,objectFit: "fill"  }}
                  image={product.image}
                />
              );
            })}
          </Stack>

          <CardMedia
          component="img"
            sx={{ height: 600, width: 500, objectFit: "fill" }}
            image={product.image}
          />

          <ProductDetails
            title={product.title}
            price={product.price}
            description={product.description}
          />
        </Stack>
      )}
    </>
  );
};

export default Product;

import React from "react";
import { productsData } from "./productsData";
import ArrivalProduct from "../ArrivalProduct";
import styles from "./style.module.css";
import { Box } from "@mui/material";

export default function NewArrivals() {
  const productProps = {
    titleClassName: styles.title,
    descriptionClassName: styles.description,
    buttonClassName: styles.button,
  };
  return (
    <Box className={styles.main_box}>
      {productsData.map((product) => (
        <Box key={product.id} className={styles.product_box}>
          <ArrivalProduct {...product} {...productProps} />
        </Box>
      ))}
    </Box>
  );
}

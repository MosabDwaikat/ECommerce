import React from "react";
import { musicExperienceData } from "./musicExperienceData";
import ArrivalProduct from "../ArrivalProduct";
import styles from "./style.module.css";
import { Box } from "@mui/material";

export default function MusicExperience() {
  const productProps = {
    titleClassName: styles.title,
    descriptionClassName: styles.description,
    buttonClassName: styles.button,
  };
  return (
    <Box className={styles.categories_sale}>
      {musicExperienceData.map((item) => {
        return (
          <Box key={item.id} className={styles.product_box}>
            <ArrivalProduct {...item} {...productProps} />
          </Box>
        );
      })}
    </Box>
  );
}

import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./style.module.css";
import productData from "./productData";

export default function ArrivalProduct({
  image,
  title,
  description,
  button,
  titleClassName,
  descriptionClassName,
  buttonClassName,
}) {
  const data = productData({
    title,
    description,
    button,
    titleClassName,
    descriptionClassName,
    buttonClassName,
  });

  return (
    <Box>
      <img src={`./images/${image}`} alt="1" />
      <CardContent className={styles.text}>
        {data.map((item) => (
          <Typography key={item.id} {...item}>
            {item.value}
          </Typography>
        ))}
      </CardContent>
    </Box>
  );
}

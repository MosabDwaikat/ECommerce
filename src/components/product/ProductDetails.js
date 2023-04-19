import React from "react";
import "./style.css";
import {Typography,Stack,Rating,Divider} from "@mui/material";
import ColorsForProduct from "./ColorsForProduct.js"
import SizeForProduct from "./SizeForProduct.js"
import ProductSmallBox from "../ProductSmallBox";

const ProductDetails = (props) => {
  return (

    
      < Stack direction="column" spacing={2} sx={{ mt: 1 ,width:"30%"}}>
        <Typography sx={{mb:2}}variant="h5">{`$ ${props.title}`}</Typography>
        <Rating sx={{mb:1}} name="half-rating" defaultValue={2.5} precision={0.5} />
        <Typography sx={{mb:1}} variant="h5">{`$ ${props.price}`}</Typography>
        <Typography  sx={{mb:1}} variant="p">
          {props.description}
        </Typography>
             
        <Divider sx={{mt:2}}/>
      <ColorsForProduct/>
      <SizeForProduct/>
    

        <ProductSmallBox />
      </Stack>

  );
};

export default ProductDetails;

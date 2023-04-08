import React from 'react'
import { productsData } from "./productsData";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './index.css';

const NewArrivals = () => {
    const product = productsData[0];
  return (
    <Box
        sx={{
        width: 570,
        height: 600,
        bgcolor: '#000',
        color: '#000',
        '&:hover': {
            backgroundColor: 'primary.dark',
            // opacity: [0.9, 0.8, 0.7],
        }, 
        }}
    >
      <img src={product.image} style={{position:'absolute',width:'511px',height:'511px',left:'29px',top:'89px'}}/>
      <Typography color='#FAFAFA'>
        {product.title}
      </Typography>
      <Typography color="#FAFAFA">
        {product.description}
      </Typography>
      <Button variant="text" color='primary'  >Shop Now</Button>
    </Box>
  )
}

export default NewArrivals

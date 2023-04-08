import  productsData  from "../Card/data";
import react from "react"
import "./style.css"
import Rating from '@mui/material/Rating';
 import React, {useState} from 'react';
 import VisibilityIcon from '@mui/icons-material/Visibility';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Card = ( {k}) => {
//to use props just use  productItems.name or price ...

  return (
    <>
      {
        productsData.map((val)=> {
            return(
                <div className='box'>
                <div className='product mtop'>
                  <div className='img'>
                    <span className='discount'>{val.id}% Off</span>
                    <img src={val.image} alt='' />
                    <div className='product-like'>
                      <FavoriteIcon/>
                      <VisibilityIcon/>
                      
                    </div>
                    <div className='add-to-cart'>
                      <button>{"add to cart"}</button> <br />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h3>{""}</h3>
                    
                   
                    <div className='price'>
                      <h4>${val.price}.00   </h4> <h4 className="oldPrice ">${"50"}.00 </h4>
                    </div> <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  </div>
                </div>
              </div>
            )
        })
      }

        
           
          
  
    
    </>
  )
}

export default Card

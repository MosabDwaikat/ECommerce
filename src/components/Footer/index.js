import React from 'react'
import './styles.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function index() {
  return (
    <div className='footer'>
        <div className='top'>
        <div className='one'>
            <h2>Exclusive</h2>
            <h3>Subscribe</h3>
            <p>Get 10% off your first order</p>

        </div>
        <div className='one'>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div className='one'>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>

        </div>
        <div className='one'>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className='five'>
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
        </div>

        </div>
        <div className='down'>
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>
        
      
    </div>
  )
}

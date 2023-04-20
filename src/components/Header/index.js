import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';

export default function index() {
  return (
    <>

    <div class="topHeader">
        <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>ShopNow</span></div>
    </div>

    <div class="bottomHeader">
        <h1>Exclusive</h1>
        <ul>
            <li class="one">Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>

        </ul>
        
        <input type="text" placeholder="What are you looking for?" name="search"/>
        <SearchIcon/>


    </div>
    </>
  )
}

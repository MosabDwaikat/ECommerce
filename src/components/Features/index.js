import React from "react"
import "./style.css"
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
const Features = () => {
  const data = [
    {
      cover:<AirportShuttleIcon/>,
      title: "FREE AND FAST DELIVERY",
      decs: "Free delivery for all orders over $140",
    },
    {
      cover: <HeadsetMicIcon/>,
      title: "24/7 CUSTOMER SERVICE",
      decs: "Free delivery for all orders over $140",
    },
    {
      cover:<VerifiedUserIcon/> ,
      title: "MONEY BACK GUARANTEE ",
      decs: "Free delivery for all orders over $140",
    },
  
  ]
  return (
    <>
      <section className='Features background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Features

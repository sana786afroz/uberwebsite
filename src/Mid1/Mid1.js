import React from "react";
import style from "./Mid1.module.css";
export default function Mid1() {
  return (
    <>
      <div className={style.parent}>
      <h1>Ride with Uber</h1>
      <div style={{border:"1px solid black"}}>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
          alt=""
        />
       <p style={{width:"15vw" ,marginLeft:"10rem",marginTop:"-8rem"}}> <h1>Uber Auto</h1> 3D Icon Uber Auto Get affordable Uber Auto
          rides with no haggling. Request Uber Auto and ride comfortably around
          your city.
        </p>
        </div>
        <div style={{border:"1px solid black"}}>
       <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt=""/>
       <p style={{width:"15vw" ,marginLeft:"10rem",marginTop:"-8rem"}}>Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber&nbsp;Moto.</p>
    </div>
    <div style={{border:"1px solid black"}}> 
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="img"/>
     <p style={{width:"15vw" ,marginLeft:"10rem",marginTop:"-8rem"}}>Book Rentals to save time with one car and driver for your multi-stop&nbsp;trips.</p>
    </div>
    <div style={{border:"1px solid black"}}>
    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png"alt ="img"/>
    <p style={{width:"15vw" ,marginLeft:"10rem",marginTop:"-8rem"}}>Book Intercity to head outstation anytime in convenient and affordable&nbsp;cars.</p>
    </div>
     </div>
    </>
  );
}

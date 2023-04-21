import React from 'react'
import style from "./Mainpic.module.css"
export default function Mainpic(){
  return(
    <div>
     <img
        className={style.main}
        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1152,h_708/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
        alt="driverpic"
      />
      
    </div>
  )
}
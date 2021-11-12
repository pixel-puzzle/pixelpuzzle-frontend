import React from "react";
import './index.less'
import JustineDusk from '../../../assets/image/home/justine_dusk.png'

export default function Block3(){
  return (
    <div className="justine-dusk">
      <div className="banner-light">
        JUSTINE DUSK
      </div>
      <img src={JustineDusk} alt=""/>
    </div>
  )
}

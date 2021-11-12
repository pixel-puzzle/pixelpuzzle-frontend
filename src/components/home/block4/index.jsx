import React from "react";
import './index.less'
import cx from 'classnames'
import GunBg from '../../../assets/image/home/exhibits/gun_bg.png'
import Gun from '../../../assets/image/home/exhibits/gun.png'
import GunEffect from '../../../assets/image/home/exhibits/bolid.png'
import WeddingDress from '../../../assets/image/home/exhibits/wedding_dress.png'
import WeddingDressBG from '../../../assets/image/home/exhibits/wedding_dress_bg.png'
import WeddingVeil from '../../../assets/image/home/exhibits/wedding_veil.png'
import WeddingVeilBG from '../../../assets/image/home/exhibits/wedding_veil_bg.png'
import Cigarette from '../../../assets/image/home/exhibits/cigarette.png'
import CigaretteBG from '../../../assets/image/home/exhibits/cigarette_bg.png'
import Swiper from 'swiper'
const exhibitsList = [
  {
    title: 'Gun',
    frame: GunBg,
    effect: GunEffect,
    nft: Gun
  },
  {
    title: 'Wedding Dress',
    frame: WeddingDressBG,
    nft: WeddingDress

  },
  {
    title: 'Wedding Veil',
    frame: WeddingVeilBG,
    nft: WeddingVeil
  },
  {
    title: 'Cigarette',
    frame: CigaretteBG,
    nft: Cigarette
  }
]

export default class Block4 extends React.Component{
  state = {
    swiper: null
  }
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      // loop: true,
      centeredSlides: true,
      slidesPerView: "3",
      initialSlide: 1,
      coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    });
    this.setState({swiper})
  }
render() {

  return (
    <div className="exhibits-ornament">
      <div className="exhibition-frame">
        <div className="exhibition-frame-container">
          <div className="swiper-container">
            <div className="exhibition-frame-box swiper-wrapper">
              {
                exhibitsList.map((item, index) => (
                  <div className={cx({
                    "exhibition-frame-item-box": true,
                    "swiper-slide": true
                  })} key={index}>
                    <h2>{item.title}</h2>
                    <div className="exhibition-frame-item">
                      <img src={item.frame} className="w-frame" alt=""/>
                      {item.effect && <img src={item.effect} className="w-effect" alt=""/>}
                      <img src={item.nft} className="w-nft" alt=""/>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="switch-tab">
          <span onClick={()=>this.state.swiper && this.state.swiper.slidePrev()}>{'<'}</span>
          NEXT
          <span onClick={()=>this.state.swiper && this.state.swiper.slideNext()}>{'>'}</span>
        </div>
      </div>
    </div>
  )
}
}

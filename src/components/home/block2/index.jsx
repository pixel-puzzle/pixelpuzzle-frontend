import React, {useState} from "react";
import './index.less'
import InitialDusk from '../../../assets/image/home/initial_dusk.png'
import Typewriter from "../../typewriter";

export default function Block2(){
  const [start, setStart] = useState(true)
  return (
    <div className="story-view">
      <img className='initial_duck' src={InitialDusk} alt=""/>
      <div className="dusk">
        <Typewriter speed={100} showSubscript start={start} text="元宇宙公元 1024 年, 在特斯拉星云中的一个富饶的行星上孵化出一个神奇物种, 该物种是一种能够直立行走的扁嘴动物, 这种动物基因不够稳定, 变异极其频繁, 不出时年就衍生出来数十万种奇异种族, 有的智慧超群, 有的性格暴力,有的酷爱时尚,有的……"/>
      </div>
    </div>
  )
}

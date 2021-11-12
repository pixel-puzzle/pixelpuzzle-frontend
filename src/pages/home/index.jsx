import React from 'react'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import Block1 from "../../components/home/block1";
import Block2 from "../../components/home/block2";
import Block3 from "../../components/home/block3";
import Block4 from "../../components/home/block4";

function Home() {
  return (
    <div className="home-page">
      <Block1/>
      <Block2/>
      <Block3/>
      <Block4/>
    </div>
  )
}

let stateToProps = (store) => {
  return {
    language: store.index.language,
  }
}

export default connect(stateToProps)(Home)

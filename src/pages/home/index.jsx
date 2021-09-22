import React from 'react'
import 'swiper/swiper-bundle.css'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import nftConfig from '../../config/nft'
import NftCard from "../../components/nft-card"
import Header from "../../components/header"
import cx from 'classnames'

const maxCount = nftConfig.reduce((max,item1) => item1.count > max ? item1.count : max, 0)
class Home extends React.Component {
  state = {
    showIndex: 0
  }
  onChange(index){
    const showIndex = index // this.state.showIndex + 1
    const showNftName = nftConfig[showIndex % nftConfig.length].name
    this.setState({
      showIndex,
      showNftName
    })
  }
  render() {
    const showNft = nftConfig[this.state.showIndex]
     return (
       <div className='home-page' style={{ background: showNft.bgColor}}>
         <Header showNft={showNft} onChange={(index) => this.onChange(index)}/>
         <div className='nft-view' onClick={() => this.onChange(1)}>
           <NftCard nftData={showNft} maxCount={maxCount}/>
           <div className={cx({
             'nft-desc': true,
             'not-desc': !showNft.desc
           })}>{showNft.desc}</div>
         </div>
       </div>
     )
  }
}

let stateToProps = (store) => {
  return {
    language: store.index.language,
  }
}

export default connect(stateToProps)(Home)

import React from 'react'
import 'swiper/swiper-bundle.css'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import nftConfig from '../../config/nft'
import NftCard from "../../components/nft-card";
const maxCount = nftConfig.reduce((max,item1) => item1.count > max ? item1.count : max, 0)
class Home extends React.Component {
  state = {
    showNftName: 'helmet-duck',
    showIndex: 0
  }
  onChange(){
    const showIndex = this.state.showIndex + 1
    const showNftName = nftConfig[showIndex % nftConfig.length].name
    this.setState({
      showIndex,
      showNftName
    })
  }
  render() {
   const showNft = nftConfig.find(item => item.name === this.state.showNftName)
     return (
       <div className='home-page' style={{ background: showNft.bgColor}}>
         <div className='nft-view' onClick={this.onChange.bind(this)}>
           <NftCard nftData={showNft} maxCount={maxCount}/>
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

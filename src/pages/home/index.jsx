import React from 'react'
import 'swiper/swiper-bundle.css'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import nftConfig from '../../config/nft'
import NftCard from "../../components/nft-card";
class Home extends React.Component {
  state = {
    showNftName: 'helmet-duck',
    showIndex: 0
  }
  onChange(){
    const showIndex = this.state.showIndex + 1
    console.log(showIndex)
    const showNftName = nftConfig[showIndex % nftConfig.length].name
    console.log(showNftName, 'showNftName')
    this.setState({
      showIndex,
      showNftName
    })
  }
  render() {
   const showNft = nftConfig.find(item => item.name === this.state.showNftName)
     return (
       <div className='home-page' style={{ background: this.state.showNftName === 'helmet-duck' ? '#C09DA7' : this.state.showNftName === 'pixelpuzzle' ? '#1A1A1D' : 'none'}}>
         <div className='nft-view' onClick={this.onChange.bind(this)}>
           <NftCard nftData={showNft} />
           {/* <button onClick={this.onChange.bind(this)}>change</button> */}
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

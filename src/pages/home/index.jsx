import React from 'react'
import 'swiper/swiper-bundle.css'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import nftConfig from '../../config/nft'
import NftCard from "../../components/nft-card";
class Home extends React.Component {
  render() {
     return (
       <div className='home-page'>
         <div className='nft-view'>
           {
             nftConfig.map(item => <NftCard key={item.name} nftData={item}/>)
           }
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

import React from 'react'
import 'swiper/swiper-bundle.css'
import './index.less'
import {connect} from 'react-redux'
import '../../assets/css/index.less'
import nftConfig from '../../config/nft'
import NftCard from "../../components/nft-card"
import Header from "../../components/header"

const maxCount = nftConfig.reduce((max,item1) => item1.count > max ? item1.count : max, 0)
let timeInterval = null
class Home extends React.Component {
  state = {
    showIndex: 0
  }
  componentDidMount() {
    const setShowIndex = () => {
      const showIndex = this.state.showIndex + 1
      this.setState({
        showIndex
      })
    }
    setTimeout(() => {
      setShowIndex()
      timeInterval = setInterval(() => {
        setShowIndex()
      }, 6000)
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(timeInterval)
  }

  render() {
    const showIndex = this.state.showIndex % nftConfig.length
    const showNft = nftConfig[showIndex]
     return (
       <div className='home-page' style={{ background: showNft.bgColor}}>
         <Header showNft={showNft}/>
         <div className='nft-view'>
           <NftCard nftData={showNft} maxCount={maxCount}/>
           <div className="nft-desc">The unpredictable power of Metaverse will give birth to a magic duck</div>
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

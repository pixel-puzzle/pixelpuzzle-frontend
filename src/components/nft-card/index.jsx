import React from "react";
import './index.less'
import cx from 'classnames'
const createItems = (count, name) => {
  const items = []
  for (let i = 0; i < count; i++) {
    items.push(<div key={name + i} />)
  }
  return items
}
export default function NftCard(props){
  const {nftData} = props
  return (
    <div className={cx(nftData.name, 'nft-card')}>
      {createItems(nftData.count, nftData.name)}
    </div>
  )
}

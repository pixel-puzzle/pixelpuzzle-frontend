import React from 'react'
import cx from "classnames";
import './index.less'
import Logo from "../../assets/image/logo.png";

export default function Header(props) {
  const {showNft, onChange} = props
  return (
    <div className={cx({
      header: true,
      show: showNft.showMenu
    })}>
      <img className="logo" src={Logo} onClick={() => onChange(0)}/>
      <div className="connect-wall" style={{color: showNft.bgColor}}>Connect Wallet</div>
    </div>
  )
}

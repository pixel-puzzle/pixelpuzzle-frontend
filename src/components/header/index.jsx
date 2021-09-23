import React, {useState} from 'react'
import cx from "classnames";
import './index.less'
import Logo from "../../assets/image/logo.png";
import ConnectWallet from "../connect-wallet";
import {useWeb3React} from "@web3-react/core";
import {formatAddress} from "../../utils/format";

export default function Header(props) {
  const {showNft, onChange} = props
  const [showContentWallet, setShowConnectWallet] = useState(false)
  const {account, active} = useWeb3React()
  return (
    <div className={cx({
      header: true,
      show: showNft.showMenu
    })}>
      <img className="logo" src={Logo} onClick={() => onChange(0)}/>
      <div className="connect-wall" style={{color: showNft.bgColor}} onClick={() => setShowConnectWallet(true)}>{account ? formatAddress(account) : 'Connect Wallet'}</div>
      <ConnectWallet show={showContentWallet} onClose={() => setShowConnectWallet(false)}/>
    </div>
  )
}

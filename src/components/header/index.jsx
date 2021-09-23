import React, {useState} from 'react'
import './index.less'
import Logo from "../../assets/image/logo.png";
import ConnectWallet from "../connect-wallet";
import {useWeb3React} from "@web3-react/core";
import {formatAddress} from "../../utils/format";

export default function Header(props) {
  const {showNft} = props
  const [showContentWallet, setShowConnectWallet] = useState(false)
  const {account} = useWeb3React()
  return (
    <div className="header">
      <img className="logo" src={Logo}/>
      <div className="connect-wall" style={{color: showNft.bgColor}} onClick={() => setShowConnectWallet(true)}>{account ? formatAddress(account) : 'Connect Wallet'}</div>
      <ConnectWallet show={showContentWallet} onClose={() => setShowConnectWallet(false)}/>
    </div>
  )
}

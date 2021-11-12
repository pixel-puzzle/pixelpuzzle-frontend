import React, {useState} from 'react'
import './index.less'
import Logo from "../../assets/image/logo.png";
import ConnectWallet from "../connect-wallet";
import {useWeb3React} from "@web3-react/core";
import {formatAddress} from "../../utils/format";
import {Link, useHistory} from "react-router-dom";
import cx from 'classnames'

export const navList = [
  {
    name: 'NFT',
    route: '/',
  }
]

export default function Header() {
  const history = useHistory()
  const [showContentWallet, setShowConnectWallet] = useState(false)
  const {account} = useWeb3React()
  return (
    <div className="header">
      <img className="logo" src={Logo}/>
      <ul className="nav">
        {
          navList.map((item, index) => (
            <li key={index}>
              <Link to="/" className={
                cx({
                  active: history.location.pathname &&
                    history.location.pathname.indexOf(item.route) === 0,
                  'nav-item': true
                })
              }>{item.name}</Link>
            </li>
          ))
        }

      </ul>
      <div className="connect-wall" onClick={() => setShowConnectWallet(true)}>{account ? formatAddress(account) : 'Connect Wallet'}</div>
      <ConnectWallet show={showContentWallet} onClose={() => setShowConnectWallet(false)}/>
    </div>
  )
}

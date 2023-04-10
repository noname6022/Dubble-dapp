import React from 'react'
import './styles/Header.css'
import Logo from '../assets/Logo.svg'
import DashboardIcon from '../assets/Header icons/DashboardIcon.svg';
import FarmIcon from '../assets/Header icons/FarmIcon.svg';
import MintIcon from '../assets/Header icons/MintIcon.svg';
import WDubIcon from '../assets/Header icons/wDubIcon.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Header = () => {
  return (

    <div className='HeaderWrapper'> 
      <Link to="/"><img src={Logo} className='HeaderLogoStyle'/></Link>

      <div className='HeaderLinks'>
      <Link to="/" className='LinkContainer'><img src={DashboardIcon} className='DashboardIcon'/> Dashboard</Link>
      <Link to="/Mint" className='LinkContainer'><img src={MintIcon} className='MintIcon'/>Mint</Link>
      <Link to="/wDub" className='LinkContainer'><img src={WDubIcon} className='WDubIcon'/>wDUB</Link>
     {/*  <Link to="/Farm" className='LinkContainer'><img src={FarmIcon} className='FarmIcon'/>Farm</Link>*/}
      </div>
      <div className='BalanceWrapper'>
      <div className='BalanceContainer'>
        <span className='BalanceText'>256 Dub</span>
        <span className='BalanceText'>258 wDub</span>
        <span className='BalanceText'><button>Connect Wallet</button></span>
      </div>
      </div>
    </div>
  )
}
export default Header;
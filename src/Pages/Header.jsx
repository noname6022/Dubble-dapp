import React from 'react';
import './styles/Header.css';
import Logo from '../assets/Logo.svg';
import DashboardIcon from '../assets/Header icons/DashboardIcon.svg';
import FarmIcon from '../assets/Header icons/FarmIcon.svg';
import MintIcon from '../assets/Header icons/MintIcon.svg';
import WDubIcon from '../assets/Header icons/wDubIcon.svg';
import { useWeb3Components } from './Backend/Web3Components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const Header = () => {
  const { activate, active, account, buttonText, setButtonText, connectWallet } = useWeb3Components();
  const formatNumber = (number) => {
    const strNumber = number.toString();
    return strNumber.length >= 5 ? strNumber.slice(0, 3) + '...' : strNumber;
  };

  return (
    <div className='HeaderWrapper'>
      <Link to="/"><img src={Logo} className='HeaderLogoStyle'/></Link>

      <div className='HeaderLinks'>
        <Link to="/" className='LinkContainer'><img src={DashboardIcon} className='DashboardIcon'/> Dashboard</Link>
        <Link to="/Mint" className='LinkContainer'><img src={MintIcon} className='MintIcon'/>Mint</Link>
        <Link to="/wDub" className='LinkContainer'><img src={WDubIcon} className='WDubIcon'/>wDUB</Link>
        {/* <Link to="/Farm" className='LinkContainer'><img src={FarmIcon} className='FarmIcon'/>Farm</Link>*/}
      </div>
      <div className='hoverContainer'>
        <div className='BalanceWrapper'>
          <div className='BalanceContainer'>
            {active && (
              <>
                <span className='BalanceText'>{formatNumber(278)} Dub</span>
                <span className='BalanceText'>{formatNumber(258)} wDub</span>
              </>
            )}
            <span className='BalanceText'>
              <button onClick={connectWallet}>
                {active
                  ? account
                    ? account.slice(0, 4) + '...' + account.slice(-4)
                    : 'Connecting...'
                  : buttonText}
              </button>
            </span>
          </div>
          {active && (
            <div className='hoverContent'>
              <div className='ConnectedChainInfo'><div  className='ConnectedChainInfoCircle'/><span>Connected to Arbitrum</span></div>
              <span className='hoverWalletName'> {active
                  ? account
                    ? account.slice(0, 6) + '...' + account.slice(-4)
                    : 'Wallet error!'
                  : buttonText}</span>
                  <div className='hoverContentCurrencies'>

                    <div className='hoverContentCurrency'>
                      <div  className='hoverContentCurrencyName'><span>DUB</span></div>
                      <span>356.813</span>
                      <hr/>
                    </div>
                    
                    <div className='hoverContentCurrency'>
                      <div  className='hoverContentCurrencyName'><span>wDUB</span></div>
                      <span>356.8513</span>
                      <hr/>
                    </div>

                    <div className='hoverContentCurrency'>
                      <div  className='hoverContentCurrencyName'><span>USDT</span></div>
                      <span>356.813</span>
                      <hr/>
                    </div>

                 <div className='hoverContentCurrency'>
                      <div  className='hoverContentCurrencyName'><span>USDC</span></div>
                      <span>3888888856.813</span>
                      <hr/>
                    </div>
                                        
                    <div className='hoverContentCurrency'>
                      <div  className='hoverContentCurrencyName'><span>DAI</span></div>
                      <span>356.8513</span>
                      <hr/>
                    </div>

                  </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Header;
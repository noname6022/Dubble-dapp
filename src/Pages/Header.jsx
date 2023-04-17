import React, {useState, useEffect} from 'react';
import './styles/Header.css';
import './styles/FooterStyles.css'
import DiscordIcon from "../assets/Social/DiscordIcon.jsx"
import MediumIcon from '../assets/Social/MediumIcon.jsx'
import TwitterIcon from '../assets/Social/TwitterIcon.jsx'
import Logo from '../assets/Logo.svg';
import DashboardIcon from '../assets/Header icons/DashboardIcon.svg';
import FarmIcon from '../assets/Header icons/FarmIcon.svg';
import MintIcon from '../assets/Header icons/MintIcon.svg';
import WDubIcon from '../assets/Header icons/wDubIcon.svg';
import BurgerBtn from '../assets/Header icons/BurgerBtn.svg';
import CloseBurgerBtn from  '../assets/Header icons/CloseBurgerBtn.svg';
import { useWeb3Components } from './Backend/Web3Components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'


const BurgerMenu = ({ isOpen, onClick }) => (
  <div className={`BurgerMenu ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <img src={BurgerBtn}/>
  </div>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className={`MobileMenu ${isOpen ? 'open' : ''}`}>
   <div className='MobileHeaderMainBlock'>
    <Link to="/"><img src={Logo} className='HeaderLogoStyle' onClick={toggleMenu}/></Link>
    <div onClick={toggleMenu} className='CloseBurgerBtnContainer'>
      <img src={CloseBurgerBtn}/>
      </div>

    </div>

    <div className='LinksMobileWrapper'>
    <div>
    <Link to="/" className='LinkContainer' onClick={toggleMenu}  ><img src={DashboardIcon} className='DashboardIcon'/> <span>Dashboard</span></Link>
    <hr/></div>
    <div>
    <Link to="/Mint" className='LinkContainer' onClick={toggleMenu} ><img src={MintIcon} className='MintIcon'/><span>Mint</span></Link>
    <hr/></div>
        <div>
    <Link to="/wDub" className='LinkContainer' onClick={toggleMenu} ><img src={WDubIcon} className='WDubIcon'/><span>wDUB</span></Link>
    <hr/></div>
</div>

  <div className='MobileHeaderSocials'>
  <div className='SocialContainer'>
        <a href='https://www.discord.com/invite/3Y8X2JTdGh' target="_blank">
          <DiscordIcon/>
        </a>
        <a href='https://twitter.com/DubbleExchange' target="_blank">
<TwitterIcon/>
        </a>
        <a href='https://www.medium.com/@dubbledex' target="_blank">
        <MediumIcon/>
        </a>
    </div>
    <div className='CopyrightContainer'>
        <h3>Copyright © 2023 Dubble Exchange</h3>
    </div>
  </div>

  </div>
);

export const Header = () => {
  const { activate, active, account, buttonText, setButtonText, connectWallet } = useWeb3Components();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const formatNumber = (number) => {
    const strNumber = number.toString();
    return strNumber.length >= 5 ? strNumber.slice(0, 3) + '...' : strNumber;
  };

  return (
    <div className='HeaderWrapper'>
      <Link to="/"><img src={Logo} className='HeaderLogoStyle'/></Link>
      <MediaQuery minWidth={601}>
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
      </MediaQuery>
      <MediaQuery maxWidth={600}>
        <BurgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </MediaQuery>
    </div>
  )
}
export default Header;
import React, { useState } from "react";
import './styles/MintStyles.css'
import './styles/ColorfulBlocksStyles.css'
import Footer from './Footer'
import MintSvg from '../assets/MintSvg'
import DubInput from "../assets/InputIcons/DubInput";
import ChainlinkLogo from "../assets/ChainlinkLogo";
import usdcIcon from '../assets/CryptoCurrencies Icons/usdc.svg'
import usdtIcon from '../assets/CryptoCurrencies Icons/usdt.svg'
import algoIcon from '../assets/CryptoCurrencies Icons/algo.svg'
import daiIcon from '../assets/CryptoCurrencies Icons/dai.svg'
import RedeemBlock from "./BlockComponents/RedeemBlock";
import MintBlock from "./BlockComponents/MintBlock";
import Tilt from 'react-parallax-tilt';
import { Hooks } from './Backend/Hooks'


export const Mint = () => {
  const {active, setActive, handleClick, isRedeemActive, setIsRedeemActive, isMintActive, setIsMintActive, handleRedeemClick, handleMintClick} = Hooks()

  return (
    <div  className='MintWrapper'>
      <div className='MintHeaderContainer'>
        <div className='MintHeaderContainerText'><h1>Mint</h1></div>
        <div className='MintHeaderContainerAnimation'><MintSvg/></div>
      </div>
      <div className='MintBlocks'>

    <div className='MintFirstBlocks'>
      <Tilt className='TotalValueBlock'>
        <h3>Total value locked</h3>
        <h2>$10.0 M</h2>
      </Tilt>
      <Tilt className='ActiveStrategyBlock'>
        <h3>Active strategies</h3>
        <h2>3</h2>
      </Tilt>
      
      <div className="APYBlock">
        <div className={`APYBlockBG ${active ? "active" : ""}`}>
        <h3>APY</h3>
        <h2>{active ? '14990.71%' /* 30 days*/ : '149.71%' /* 7 days */ }</h2>
        </div>
        <div className="toggle-container">
          <div className="toggle" onClick={handleClick}>
          <div className={`knob ${active ? "active" : ""}`}>
            <div className="label">
              <span>
              {active ? "30 Days" : "7 Days"}
              </span>
            </div>
          </div>
          <div className={`non-active-label ${active ? "" : "active"}`}>
            {active ? "7 Days" : "30 Days"}
          </div>
        </div>
      </div>
      </div>
    </div>

    <Tilt className="ExchangeBlock">
      <div className="ExchangeBlockText">
        <h3>Exchange Rates</h3>
        <hr/>
      </div>
      <div className="CurrencyExchangeSection">
        <div className="CurrencyExchangeSectionBlock">
          <DubInput/> <span>1 DUB = 1.00000</span> <div className="CurrencyInfoWithIconBLock"><img src={usdtIcon}/><span><b>USDT/</b>USD</span></div>
        </div>
        <div className="CurrencyExchangeSectionBlock">
          <DubInput/> <span>1 DUB = 1.00000</span><div className="CurrencyInfoWithIconBLock"><img src={usdcIcon}/><span><b>USDC/</b>USD</span></div>
        </div>
        <div className="CurrencyExchangeSectionBlock">
          <DubInput/> <span>1 DUB = 1.00000</span> <div className="CurrencyInfoWithIconBLock"><img src={daiIcon}/><span><b>DAI/</b>USD</span></div>
        </div>
        <hr/>      
        </div>

      <div className="LiveRatesInfoContainer">
        Live rates powered by <ChainlinkLogo/> 
      </div>
 </Tilt>

      <div className='MintRedeemBlockContainer'>
        <div className='MintRedeemBlockButtonsContainer'>
             <button
        className={`mint-button ${isMintActive ? "active" : ""}`}
        onClick={handleMintClick}
      >
        Mint
      </button>   
      <button
        className={`redeem-button ${isRedeemActive ? "active" : ""}`}
        onClick={handleRedeemClick}
      >
        Redeem
      </button>      

      
      </div>
      {isRedeemActive && <RedeemBlock/>}

      {isMintActive && <MintBlock/>}
      </div>







 
<div>

</div>

    </div>
        <Footer/>

    </div>
  )
}
export default Mint
import React, {useState} from 'react'
import './styles/DashboardStyles.css'
import './styles/ColorfulBlocksStyles.css'
import DashboardChartIcon from '../assets/DashboardChart'
import Footer from './Footer'
import { Hooks } from './Backend/Hooks'
import usdcIcon from '../assets/CryptoCurrencies Icons/usdc.svg'
import usdtIcon from '../assets/CryptoCurrencies Icons/usdt.svg'
import algoIcon from '../assets/CryptoCurrencies Icons/algo.svg'
import daiIcon from '../assets/CryptoCurrencies Icons/dai.svg'

export const Dashboard = () => {
  const {active, setActive, handleClick, isRedeemActive, setIsRedeemActive, isMintActive, setIsMintActive, handleRedeemClick, handleMintClick} = Hooks()

 

  return (
    <div  className='DashboardWrapper'>
      <div className='DashboardHeaderContainer'>
        <div className='DashboardHeaderContainerText'><h1>Dashboard</h1></div>
        <div className='DashboardHeaderContainerAnimation'><DashboardChartIcon/></div>
      </div>
      <div className='DashboardBlocks'>
        <div className='ProtocolDataBlock'>
          <h2 className='DataBlockText'>Protocol data</h2>

          <div className='TotalValueBlock DashboardTotalValueBlock'>
        <h3>Total value locked</h3>
        <h2>$10.0 M</h2>
      </div>

          <div className='ActiveStrategyBlock DashboardActiveStrategy'>
        <h3>Active strategies</h3>
        <h2>3</h2>
      </div>

      
      <div className='ProfitBlock'>
        <h3>Profit</h3>
        <h2>$1,200</h2>
      </div>

      <div className="APYBlock DashboardAPYBlock">
        <div className={`APYBlockBG ${active ? "active" : ""} DashboardAPYBlockBG`}>
        <h3>APY</h3>
        <h2>{active ? '14990.71%' /* 30 days*/ : '149.71%' /* 7 days */ }</h2>
        </div>
        <div className="toggle-container Dashboard-toggle-container">
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
        </div>        </div>        </div>

      <div className='BalanceBlock'>
        <h3>Balance $DUB</h3>
        <h2>845</h2>
      </div>

      <div className='LRPBlock'>
        <h3>Last Rebase Payout</h3>
        <h2>$1,200</h2>
      </div>

        </div>

        <div className='CollateralWrapper'>
          <h2 className='DataBlockText '>Collateral</h2>

          <div className='CollateralContainer'>
            <div className='CollateralContainerHead'>
              <span>Stablecoin</span>
              <span>Safety Score</span>
              <span>Asset Value</span>
              <span>% in Portfolio</span>
              <hr/>
            </div>

            <div className='CollateralContainerInfo'>
              <div className='CollateralContainerInfoValues'>
                <div className='CollateralContainerInfoCurrency'><img src={usdtIcon}/><span>USDT</span></div>
                <span className='CollateralContainerInfoCurrencyScore'>Very High</span>
                <span><b>$ 1 296 171,08</b></span>
                <div className='CollateralProgressContainer greenCollateralProgress'>
                <progress value="12" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

              <div className='CollateralContainerInfoValues'>
                <div className='CollateralContainerInfoCurrency'><img src={usdcIcon}/><span>USDC</span></div>
                <span className='CollateralContainerInfoCurrencyScore'>Very High</span>
                <span><b>$ 1 296 171,08</b></span>
                <div className='CollateralProgressContainer  blueCollateralProgress'>
                <progress value="12" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

              <div className='CollateralContainerInfoValues'>
                <div className='CollateralContainerInfoCurrency CollateralContainerInfoCurrencyThird'><img src={daiIcon}/><span>DAI</span></div>
                <span className='CollateralContainerInfoCurrencyScore'>Very High</span>
                <span><b>$ 1 296 171,08</b></span>
                <div className='CollateralProgressContainer yellowCollateralProgress'>
                <progress value="64" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

            </div>




          </div>

        </div>
      </div>

      <div>
        <h3>Je</h3>
      </div>
      <Footer/>
    </div>
  )
}
export default Dashboard

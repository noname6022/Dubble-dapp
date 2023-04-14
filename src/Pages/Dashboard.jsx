import React, {useState} from 'react'
import './styles/DashboardStyles.css'
import './styles/ColorfulBlocksStyles.css'
import DashboardChartIcon from '../assets/DashboardChart'
import Tilt from 'react-parallax-tilt';
import Footer from './Footer'
import { Hooks } from './Backend/Hooks'
import usdcIcon from '../assets/CryptoCurrencies Icons/usdc.svg'
import usdtIcon from '../assets/CryptoCurrencies Icons/usdt.svg'
import daiIcon from '../assets/CryptoCurrencies Icons/dai.svg'
import AaveLogo from '../assets/CryptoCurrencies Icons/AaveLogo.webp'
import ArbitrumLogo from '../assets/CryptoCurrencies Icons/ArbitrumLogo.webp'
import { OpenInNewTab } from '../assets/OpenInNewTab'

export const Dashboard = () => {
  const {active, setActive, handleClick, isRedeemActive, setIsRedeemActive,  randomColors, setRandomColors, getRandomColor, isMintActive, setIsMintActive, handleRedeemClick, handleMintClick} = Hooks()

  const strategiesData = [
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 23, procents: '23%' },
    { name: 'Aave - USDT', logo: AaveLogo, chainName: 'Arbitrum', chainLogo: ArbitrumLogo, assetValue: '1 296 171,325', progressValue: 56, procents: '56%' },

  ];

  // Get the random colors from the Hooks function
  const hooks = Hooks(strategiesData.length);

  return (
    <div  className='DashboardWrapper'>
      <div className='DashboardHeaderContainer'>
        <div className='DashboardHeaderContainerText'><h1>Dashboard</h1></div>
        <div className='DashboardHeaderContainerAnimation'><DashboardChartIcon/></div>
      </div>
      <div className='DashboardBlocks'>
        <div className='ProtocolDataBlock'>
          <h2 className='DataBlockText'>Protocol data</h2>
          <Tilt className='TotalValueBlock DashboardTotalValueBlock'>
        <h3>Total value locked</h3>
        <h2>$10.0 M</h2>
      </Tilt>
          <Tilt  className='ActiveStrategyBlock DashboardActiveStrategy'>
        <h3>Active strategies</h3>
        <h2>3</h2>
      </Tilt >

      
      <Tilt  className='ProfitBlock'>
        <h3>Profit</h3>
        <h2>$1,200</h2>
      </Tilt >

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

      <Tilt className='BalanceBlock'>
        <h3>Balance $DUB</h3>
        <h2>845</h2>
      </Tilt> 

      <Tilt  className='LRPBlock'>
        <h3>Last Rebase Payout</h3>
        <h2>$1,200</h2>
      </Tilt >

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
                <div className='ProgressContainer greenProgress'>
                <progress value="12" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

              <div className='CollateralContainerInfoValues'>
                <div className='CollateralContainerInfoCurrency'><img src={usdcIcon}/><span>USDC</span></div>
                <span className='CollateralContainerInfoCurrencyScore'>Very High</span>
                <span><b>$ 1 296 171,08</b></span>
                <div className='ProgressContainer blueProgress'>
                <progress value="12" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

              <div className='CollateralContainerInfoValues'>
                <div className='CollateralContainerInfoCurrency CollateralContainerInfoCurrencyThird'><img src={daiIcon}/><span>DAI</span></div>
                <span className='CollateralContainerInfoCurrencyScore'>Very High</span>
                <span><b>$ 1 296 171,08</b></span>
                <div className='ProgressContainer yellowProgress'>
                <progress value="64" max="100"> </progress><span>62% </span>
                </div>
                <hr/>
              </div>

            </div>




          </div>

        </div>
      </div>

      <div className='StrategiesWrapper'>
      <h2 className='DataBlockText '>Strategies</h2>
      <div className='StrategiesContainer'>
      <div className='StrategiesContainerHead'>
              <span>Strategy</span>
              <span>Chain</span>
              <span>Net asset value</span>
              <span>% in Portfolio</span>
              <hr/>
            </div>
            <div className='StrategiesInformationBlock'>
{/*start of all blocks */}
{strategiesData.map((strategy, index) => (
        <div key={index} className='StrategiesInformationValues'>
          <div className='StrategiesInformationStrategy'>
            <img src={strategy.logo} /><a href='https://www.google.com' target='_blank'>{strategy.name}<OpenInNewTab /></a>
          </div>
          <div className='StrategiesInformationChainName'>
            <img src={strategy.chainLogo} className='StrategiesInformationChainLogo' /><span>{strategy.chainName}</span>
          </div>
          <span className='StrategiesInformationAssetValueNumber'><b>$ {strategy.assetValue}</b></span>
          <div className="ProgressContainer progressRandomColor StrategiesProgressContainer" style={{ "--random-color": hooks.randomColors[index] }}>
            <progress value={strategy.progressValue} max="100"> </progress><span>{strategy.procents}</span>
          </div>
          <hr />
        </div>
      ))}


        
{/*end of all blocks */}
              </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Dashboard

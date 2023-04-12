import React, {useState} from 'react'
import './styles/DashboardStyles.css'
import './styles/ColorfulBlocksStyles.css'
import DashboardChartIcon from '../assets/DashboardChart'
import Footer from './Footer'
import { Hooks } from './Backend/Hooks'

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

        <div>
          <h2 className='DataBlockText '>Collateral</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Dashboard

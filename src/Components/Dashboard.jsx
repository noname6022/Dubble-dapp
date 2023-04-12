import React from 'react'
import './styles/DashboardStyles.css'
import DashboardChartIcon from '../assets/DashboardChart'
import Footer from './Footer'

export const Dashboard = () => {
  return (
    <div  className='DashboardWrapper'>
      <div className='DashboardHeaderContainer'>
        <div className='DashboardHeaderContainerText'><h1>Dashboard</h1></div>
        <div className='DashboardHeaderContainerAnimation'><DashboardChartIcon/></div>
      </div>
      <div className='DashboardBlocks'>
        <div>
          <h2>Protocol data</h2>
        </div>

        <div>
          <h2>Collateral</h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Dashboard

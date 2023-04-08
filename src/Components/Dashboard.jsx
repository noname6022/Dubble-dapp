import React from 'react'
import './styles/DashboardStyles.css'
import DashboardChartIcon from '../assets/DashboardChart'

export const Dashboard = () => {
  return (
    <div  className='DashboardWrapper'>
      <div className='DashboardHeaderContainer'>
        <div className='DashboardHeaderContainerText'><h1>Dashboard</h1></div>
        <div className='DashboardHeaderContainerAnimation'><DashboardChartIcon/></div>
      </div>
      <div className='DashboardSvgs'>Hi</div>
    </div>
  )
}
export default Dashboard

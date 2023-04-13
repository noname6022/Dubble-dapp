import React from 'react'
import './styles/FarmStyles.css'
import Footer from './Footer'

export const Farm = () => {
  return (
    <div  className='FarmWrapper'>
      <div className='FarmHeaderContainer'>
        <div className='FarmHeaderContainerText'><h1>Farm</h1></div>
        <div className='FarmHeaderContainerAnimation'></div>
      </div>
      <div className='FarmSvgs'>Hi</div>
      <Footer/>
    </div>
  )
}
export default Farm

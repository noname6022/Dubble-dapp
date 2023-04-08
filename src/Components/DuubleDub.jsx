import React from 'react'
import './styles/dubbleDubStyles.css'
import WDUbSvgs from '../assets/wDubIcons/wDUbSvgs'

export const DuubleDub = () => {
  return (
    <div  className='wDubWrapper'>
      <div className='wDubHeaderContainer'>
        <div className='wDubHeaderContainerText'><h1>wDUB</h1></div>
        <div className='wDubHeaderContainerAnimation'><WDUbSvgs/></div>
      </div>
      <div className='wDubSvgs'>Hi</div>
    </div>
  )
}
export default DuubleDub
import React from 'react'
import './styles/MintStyles.css'
import Footer from './Footer'
import MintSvg from '../assets/MintSvg'


export const Mint = () => {
  return (
    <div  className='MintWrapper'>
      <div className='MintHeaderContainer'>
        <div className='MintHeaderContainerText'><h1>Mint</h1></div>
        <div className='MintHeaderContainerAnimation'><MintSvg/></div>
      </div>
      <div className='MintBlocks'>

        <div className='MintFirstBlocks'>
      <div className='TotalValueBlock'>
        <h3>Total value locked</h3>
        <h2>$10.0 M</h2>
      </div>
      <div className='ActiveStrategyBlock'>
        <h3>Active strategies</h3>
        <h2>$10.0 M</h2>
      </div>
      
      </div>

    </div>
        <Footer/>

    </div>
  )
}
export default Mint
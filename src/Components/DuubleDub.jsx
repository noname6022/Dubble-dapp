import React from 'react'
import './styles/dubbleDubStyles.css'
import WDUbSvgs from '../assets/wDubIcons/wDUbSvgs'
import ArrowDown from '../assets/ArrowDown.svg'
import Footer from './Footer'

export const DuubleDub = () => {
  return (
    <div  className='wDubWrapper'>
      <div className='wDubHeaderContainer'>
        <div className='wDubHeaderContainerText'><h1>wDUB</h1></div>
        <div className='wDubHeaderContainerAnimation'><WDUbSvgs/></div>
      </div>
      <div className='wDubBlockWrapper'>
        <div className='wDubBlockContainer'>
        <div className='wDubBlockContainerParagraph'>
          <p>wDUB is a wrapped version of DUB. Unlike your DUB balance, your wDUB balance will<br/>
           not increase over time. Instead, the value of each wDUB token increases in value<br/>
          when rebasing occurs daily. When wDUB is unwrapped, you receive equal wDUB:DUB<br/>
          value in return, so the total yield earned is the same.</p>
        </div>

        <div className='wDubInputFirstWrapper'>
          <span>From</span>
          <div className='wDubInputFirstContainer'>
            <input/>
          </div>
          
        </div>

        <div>
        <img src={ArrowDown}/>
        </div>

        <div>
          <span>to</span>
          <input/>
        </div>

        <div>
        <span>Current Index</span>
        </div>

        <div>
          <button>Wrap</button>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default DuubleDub
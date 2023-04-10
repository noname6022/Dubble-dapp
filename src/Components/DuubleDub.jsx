import React from 'react'
import './styles/dubbleDubStyles.css'
import WDUbSvgs from '../assets/wDubIcons/wDUbSvgs'
import ArrowDown from '../assets/ArrowDown.svg'
import Footer from './Footer'
import DubInput from '../assets/InputIcons/DubInput'
import WDubIcon from '../assets/InputIcons/WDubIcon'
import WMetamaskIcon from '../assets/wDubIcons/MetamaskIcon.webp'
import PlusIcon from '../assets/wDubIcons/PlusIcon'

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

        <div className='wDubInputWrapper'>
          <span className='wDubInputWrapperText'>From</span>
          <div className='wDubInputContainer'>
            <div className='wDubIconConatiner'>
              <DubInput/>
              <span>DUB</span>
            </div>
            <input type='text'/>
            <div className='InputBalanceContainer'>
              <span>
                0.00
              </span>
              <div className='InputBalanceContainerAdditionalInfo'>
              
              <button className='wDubMaxBtn'>Max</button>
              <span>Balance: 0.00 DUB</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className='wDubArrowContainer'>
        <img src={ArrowDown}/>
        </div>

        <div className='wDubInputWrapper'>
          <span className='wDubInputWrapperText'>To</span>
          <div className='wDubInputContainer'>
            <div className='wDubIconConatiner'>
              <WDubIcon/>
              <span className='SecondWDubIconConatinerText'>wDUB</span>
            </div>
            <input type='text'/>
            <div className='InputBalanceContainer SecondInputBalanceContainer'>
              <span>
                0.00
              </span>
              <span className='SecondInputBalanceContainerAdditionalInfo'>Balance: 0.00 wDUB</span>

            </div>
          </div>
          
        </div>

        <div className='wDubMetamaskWrapper'>
        <div className='wDubMetamaskContainer'>
        <WDubIcon/>
              <span>$wDUB</span>
              <button className='wDubMetamaskBtn'><img src={WMetamaskIcon}/><PlusIcon/></button>
        </div>
        </div>

        <div className='wDubBtnWrapper'>
          <button className='wDubBtn'>Wrap</button>
        </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default DuubleDub
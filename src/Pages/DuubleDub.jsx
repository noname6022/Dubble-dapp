import React from 'react'
import './styles/dubbleDubStyles.css'
import WDUbSvgs from '../assets/wDubIcons/wDUbSvgs'
import ArrowDown from '../assets/ArrowDown.svg'
import Footer from './Footer'
import DubInput from '../assets/InputIcons/DubInput'
import WDubIcon from '../assets/InputIcons/WDubIcon'
import WMetamaskIcon from '../assets/wDubIcons/MetamaskIcon.webp'
import PlusIcon from '../assets/wDubIcons/PlusIcon'
import { Hooks } from './Backend/Hooks'

export const DuubleDub = () => {

  const {options,selectedOption, setSelectedOption,showOptions, setShowOptions,handleOptionClick, handleKeyPress} = Hooks();

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

        <div className='InputWrapper'>
          <span className='InputWrapperText'>From</span>
          <div className='InputContainer'>
            <div className='InputIconConatiner'>
              <DubInput/>
              <span>DUB</span>
            </div>
            <input type="text"  placeholder="0.00" onKeyPress={handleKeyPress}/>
            <div className='InputBalanceContainer'>
              <div className='InputBalanceContainerAdditionalInfo'>
              
              <button className='InputMaxBtn'>Max</button>
              <span>Balance: 0.00 DUB</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className='InputArrowContainer'>
        <img src={ArrowDown}/>
        </div>

        <div className='InputWrapper'>
          <span className='InputWrapperText'>To</span>
          <div className='InputContainer'>
            <div className='InputIconConatiner'>
              <WDubIcon/>
              <span className='SecondInputIconConatinerText'>wDUB</span>
            </div>
            <input type="text"  placeholder="0.00" onKeyPress={handleKeyPress}/>
            <div className='InputBalanceContainer SecondInputBalanceContainer'>
              <span className='SecondInputBalanceContainerAdditionalInfo'>Balance: 0.00 wDUB</span>

            </div>
          </div>
          
        </div>

        <div className='InputMetamaskWrapper wDubInputMetamaskWrapper'>
        <div className='InputMetamaskContainer'>
        <WDubIcon/>
              <span>$wDUB</span>
              <button className='InputMetamaskBtn'><img src={WMetamaskIcon}/><PlusIcon/></button>
        </div>
        <div className='CurrentWDubIndexContainer'>
          <h4>Current index = 1.11</h4>
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
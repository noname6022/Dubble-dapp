import React from 'react'
import './styles/dubbleDubStyles.css'
import './styles/FooterStyles.css'
import WDUbSvgs from '../assets/wDubIcons/wDUbSvgs'
import ArrowDown from '../assets/ArrowDown.svg'
import Footer from './Footer'
import DubInput from '../assets/InputIcons/DubInput'
import WDubIcon from '../assets/InputIcons/WDubIcon'
import WMetamaskIcon from '../assets/wDubIcons/MetamaskIcon.webp'
import PlusIcon from '../assets/wDubIcons/PlusIcon'
import { Hooks } from './Backend/Hooks'
import MediaQuery from 'react-responsive'

export const DuubleDub = () => {

  const {options,selectedOption, deviceType, setDeviceType, detectDeviceType,  setSelectedOption,showOptions, setShowOptions,handleOptionClick, handleKeyPress} = Hooks();

  return (
    <div  className='wDubWrapper'>
      <div className='wDubHeaderContainer'>
        <div className='wDubHeaderContainerText'><h1>wDUB</h1></div>
        <MediaQuery minWidth={601}>
        <div className='wDubHeaderContainerAnimation'><WDUbSvgs/></div></MediaQuery>
      </div>
      <div className='wDubBlockWrapper'>
        <div className='wDubBlockContainer'>
        <div className='wDubBlockContainerParagraph'>
        <MediaQuery maxWidth={600}>
        <p>wDUB is a wrapped version of DUB. Unlike your DUB balance, your wDUB<br/> 
          balance will not increase over time. Instead, the value of each wDUB token<br/> 
          increases in value when rebasing occurs daily. When wDUB is unwrapped, you<br/>  
          receive equal wDUB:DUB value in return, so the total yield earned is the same.</p></MediaQuery>
          <MediaQuery minWidth={601}>
          <p>wDUB is a wrapped version of DUB. Unlike your DUB balance, your wDUB balance will<br/>
           not increase over time. Instead, the value of each wDUB token increases in value<br/>
          when rebasing occurs daily. When wDUB is unwrapped, you receive equal wDUB:DUB<br/>
          value in return, so the total yield earned is the same.</p></MediaQuery>
        </div>

        <div className='InputWrapper'>
          <span className='InputWrapperText'>From</span>
          <div className='InputContainer'>
            <div className='InputIconConatiner'>
              <DubInput/>
              <span>DUB</span>
            </div>
            <input
              type="text"
                onKeyPress={handleKeyPress}
                pattern="[0-9]*\.?[0-9]*"
                inputmode={deviceType === 'android' ? 'decimal' : ''}
                placeholder="0.00"
              />
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
            <input
              type="text"
                onKeyPress={handleKeyPress}
                pattern="[0-9]*\.?[0-9]*"
                inputmode={deviceType === 'android' ? 'decimal' : ''}
                placeholder="0.00"
              />
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
      <MediaQuery minWidth={601}>
      <Footer/>
      </MediaQuery>
      <MediaQuery maxWidth={600}>
      <div className='CopyrightContainer'>
        <h3>Copyright © 2023 Dubble Exchange</h3>
    </div>
      </MediaQuery>
    </div>
  )
}
export default DuubleDub
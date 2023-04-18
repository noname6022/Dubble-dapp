import React from 'react'
import './MintRedeemBlocksStyles.css'
import WDUbSvgs from '../../assets/wDubIcons/wDUbSvgs'
import ArrowDown from '../../assets/ArrowDown.svg'
import DubInput from '../../assets/InputIcons/DubInput'
import WDubIcon from '../../assets/InputIcons/WDubIcon'
import WMetamaskIcon from '../../assets/wDubIcons/MetamaskIcon.webp'
import PlusIcon from '../../assets/wDubIcons/PlusIcon'
import { Hooks } from '../Backend/Hooks'
import { DropdownArrow } from '../../assets/DropdownArrow'
import MediaQuery from 'react-responsive'

export const MintBlock = () => {
    const {options,selectedOption, deviceType, setDeviceType, detectDeviceType, setSelectedOption,showOptions, setShowOptions,handleOptionClick, handleKeyPress} = Hooks();

  return (
    <div className="MintBlock">
    <div className="InputWrapper">
      <div className="InputContainer">
        <div className="DropdownSelectButton">
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setShowOptions(!showOptions)}
            >
              <img
                className="option-image"
                src={selectedOption.image}
                alt={selectedOption.value}
              />
              {selectedOption.value}
              <DropdownArrow className={`dropdown-arrow ${showOptions ? "rotate" : ""}`}/>
            </button>
            {showOptions && (
              <div className="dropdown-options">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="dropdown-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    <img
                      className="option-image"
                      src={option.image}
                      alt={option.value}
                    />
                    {option.value}
                    
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <input
              type="text"
                onKeyPress={handleKeyPress}
                pattern="[0-9]*\.?[0-9]*"
                inputmode={deviceType === 'android' ? 'decimal' : ''}
                placeholder="0.00"
              />
        <div className="InputBalanceContainer">
          <div className="InputBalanceContainerAdditionalInfo">
            <button className="InputMaxBtn">Max</button>
            <span>
              Balance: 0.00 {selectedOption.value}
            </span>
          </div>
        </div>
      </div>
    
  </div>

  <div className='InputArrowContainer'>
  <img src={ArrowDown}/>
  </div>

  <div className='InputWrapper'>
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
      <div className='InputBalanceContainer SecondInputBalanceContainer'>
        <span className='SecondInputBalanceContainerAdditionalInfo'>Balance: 0.00 wDUB</span>

      </div>
    </div>
    
  </div>
  <MediaQuery minWidth={601}>
<div className='MintRedeemBlockParagraph'>
0.25% minting fee is applicable on all $DUB deposits. All slippage and extra costs are<br/>
 charged based on market conditions to the user. Estimates shown are an approximate.
</div>
</MediaQuery>

<MediaQuery maxWidth={600}>
<div className='MintRedeemBlockParagraph'>
0.25% minting fee is applicable on all $DUB deposits. All slippage and<br/> 
extra costs are charged based on market conditions to the user.<br/> 
Estimates shown are an approximate.
</div>
</MediaQuery>
  <div className='InputMetamaskWrapper'>
  <div className='InputMetamaskContainer InputMintRedeemMetamaskContainer'>
    <div className="purpleDUB purpleMintRedeemDUB">
  <WDubIcon/>
        <span>$DUB</span></div>
        <button className='InputMetamaskBtn'><img src={WMetamaskIcon}/><PlusIcon/></button>
  </div>
  </div>

  <div className='MintRedeemBtnWrapper'>
      <button className='MintRedeemBtn'>Mint</button>
    </div>  </div>
  )
}
export default MintBlock
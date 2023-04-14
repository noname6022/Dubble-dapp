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

export const MintBlock = () => {
    const {options,selectedOption, setSelectedOption,showOptions, setShowOptions,handleOptionClick, handleKeyPress} = Hooks();

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
        <input type="text"  placeholder="0" onKeyPress={handleKeyPress}/>
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
      <input type="text" placeholder="0" onKeyPress={handleKeyPress}/>
      <div className='InputBalanceContainer SecondInputBalanceContainer'>
        <span className='SecondInputBalanceContainerAdditionalInfo'>Balance: 0.00 wDUB</span>

      </div>
    </div>
    
  </div>
<div className='MintRedeemBlockParagraph'>
0.25% minting fee is applicable on all $DUB deposits. All slippage and extra costs are<br/>
 charged based on market conditions to the user. Estimates shown are an approximate.
</div>
  <div className='InputMetamaskWrapper'>
  <div className='InputMetamaskContainer '>
    <div className="purpleDUB">
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
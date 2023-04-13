import React, {useState} from 'react'
import usdcIcon from '../../assets/CryptoCurrencies Icons/usdc.svg'
import usdtIcon from '../../assets/CryptoCurrencies Icons/usdt.svg'
import algoIcon from '../../assets/CryptoCurrencies Icons/algo.svg'
import daiIcon from '../../assets/CryptoCurrencies Icons/dai.svg'

export const Hooks = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
  
    const [isRedeemActive, setIsRedeemActive] = useState(false);
    const [isMintActive, setIsMintActive] = useState(true);
    
    const handleRedeemClick = () => {
      setIsRedeemActive(true);
      setIsMintActive(false);
    };
  
    const handleMintClick = () => {
      setIsMintActive(true);
      setIsRedeemActive(false);
    };
//dropdown
    const options = [
      { value: "USDC", image: usdcIcon },
      { value: "USDT", image: usdtIcon },
      { value: "DAI", image: daiIcon },
      { value: "ALGO", image: algoIcon },
    ];
  
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
    };


  return { active, setActive, handleClick, isRedeemActive, setIsRedeemActive, isMintActive, setIsMintActive, handleRedeemClick, handleMintClick, options,selectedOption, setSelectedOption,showOptions, setShowOptions,handleOptionClick}
}

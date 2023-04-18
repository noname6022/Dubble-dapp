import React, {useEffect, useState} from 'react'
import usdcIcon from '../../assets/CryptoCurrencies Icons/usdc.svg'
import usdtIcon from '../../assets/CryptoCurrencies Icons/usdt.svg'
import algoIcon from '../../assets/CryptoCurrencies Icons/algo.svg'
import daiIcon from '../../assets/CryptoCurrencies Icons/dai.svg'

export const Hooks = (count) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    const [randomColors, setRandomColors] = useState("#000000");



    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


        useEffect(() => {
      setRandomColors(Array.from({ length: count }, () => getRandomColor()));
    }, [count]);

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
    ];
  
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
    };

    const handleKeyPress = (e) => {
      if (!/[\d.,]/.test(e.key)) {
        e.preventDefault();
      }
    };

    const [deviceType, setDeviceType] = useState('');

    const detectDeviceType = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent)) {
        return 'android';
      }
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'ios';
      }
      return 'other';
    };

    useEffect(() => {
      setDeviceType(detectDeviceType());
    }, []);

  return { active, setActive, handleClick, deviceType, setDeviceType, detectDeviceType, isRedeemActive, setIsRedeemActive, isMintActive, randomColors, setRandomColors, getRandomColor, setIsMintActive, handleRedeemClick, handleMintClick, options,selectedOption, setSelectedOption,showOptions, setShowOptions,handleOptionClick, handleKeyPress}
}

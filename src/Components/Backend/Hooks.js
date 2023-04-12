import React, {useState} from 'react'

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

  return {active, setActive, handleClick, isRedeemActive, setIsRedeemActive, isMintActive, setIsMintActive, handleRedeemClick, handleMintClick}
}

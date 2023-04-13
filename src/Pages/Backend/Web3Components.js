import React, { useState, useEffect } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';

const injectedConnector = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });

export const useWeb3Components = () => {
  const { activate, active, account, library } = useWeb3React();
  const [buttonText, setButtonText] = useState('Connect Wallet');

  useEffect(() => {
    const checkIfConnected = async () => {
      const provider = await injectedConnector.getProvider();
      if (provider) {
        const accounts = await provider.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          await activate(injectedConnector);
        }
      }
    };

    checkIfConnected();
  }, [activate]);

  const connectWallet = async () => {
    try {
      await activate(injectedConnector);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { activate, active, account, buttonText, setButtonText, connectWallet };
};
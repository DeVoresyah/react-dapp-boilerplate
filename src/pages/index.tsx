import React, { useState, useCallback } from "react";
import { WALLET_LIST } from "../constants/dummy";
import { chains } from "../services/web3";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

// Components
import { Header } from "../components/Header";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { DisconnectButton } from "../components/DisconnectButton";

export const HomeScreen = () => {
  const [isAgree, setIsAgree] = useState(false);
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector({
      chains,
    }),
  });

  // Handle agreement checkbox
  const onAgree = useCallback((value: boolean) => setIsAgree(value), []);

  return (
    <div className="w-screen h-screen md:flex md:items-center md:justify-center">
      <div className="w-screen h-screen md:rounded-xl md:h-auto p-4 bg-white flex flex-col md:max-w-2xl lg:max-w-3xl md:shadow">
        <Header />

        {!isConnected && <PrivacyPolicy isAgree={isAgree} onAgree={onAgree} />}

        {!isConnected ? (
          <div className="mt-6 mb-2">
            <h1 className="text-base font-bold md:mb-5">Choose Wallet</h1>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {WALLET_LIST.map((item) => (
                <button
                  className="flex flex-col items-center justify-between border border-[#E5E7EB] px-4 py-5 rounded-md min-h-[130px]"
                  onClick={() =>
                    item.title === "MetaMask" && isAgree && connect()
                  }
                >
                  <img src={item.img} alt="item" />
                  <h1 className="text-sm font-bold leading-normal">
                    {item.title}
                  </h1>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center md:min-h-[200px]">
            <DisconnectButton />
          </div>
        )}
      </div>
    </div>
  );
};

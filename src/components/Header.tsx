import React from "react";
import { useAccount, useNetwork, useDisconnect } from "wagmi";

// Components
import { DisconnectButton } from "./DisconnectButton";

const Header = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold font-sans text-gray-900">
          {!isConnected ? (
            "Connect yout wallet"
          ) : (
            <span>
              Connected to{" "}
              <span className="text-indigo-500">{chain?.name}</span> network
            </span>
          )}
        </h1>
        <p className="text-xs font-sans text-gray-500">
          {!isConnected
            ? "Select what wallet you want to connect below"
            : address}
        </p>
      </div>
      <div>
        {!isConnected ? (
          <button className="p-3 bg-gray-200 rounded-full">
            <img src="/img/icon/icon-close.svg" alt="close" />
          </button>
        ) : (
          <div className="hidden md:visible">
            <DisconnectButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

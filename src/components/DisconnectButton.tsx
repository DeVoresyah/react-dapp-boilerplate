import React from "react";
import { useAccount, useDisconnect } from "wagmi";

export const DisconnectButton = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return isConnected ? (
    <button
      className="bg-red-500 rounded-full py-2 px-6 text-white font-bold text-center"
      onClick={() => disconnect()}
    >
      Disconnect
    </button>
  ) : null;
};

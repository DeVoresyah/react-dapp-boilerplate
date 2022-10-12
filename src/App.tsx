import React from "react";
import { client } from "./services/web3";
import { WagmiConfig } from "wagmi";

// Pages
import { HomeScreen } from "./pages/index";

function App() {
  return (
    <WagmiConfig client={client}>
      <HomeScreen />
    </WagmiConfig>
  );
}

export default App;

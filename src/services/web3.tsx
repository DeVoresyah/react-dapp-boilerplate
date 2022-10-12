import { createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.ropsten],
  [publicProvider()]
);

export const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

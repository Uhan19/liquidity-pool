import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, mainnet, createClient, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const { chains, provider, webSocketProvider } = configureChains(
    [sepolia, mainnet],
    [publicProvider()]
  );
  const { wallets } = getDefaultWallets({
    chains,
    appName: "SpaceCoin",
  });
  const connectors = connectorsForWallets([
    ...wallets,
    {
      groupName: "Other",
      // are wallet configurations for Argent and Trust Wallet, respectively.
      // The chains parameter specifies the blockchain networks these wallets will support in your application.
      wallets: [argentWallet({ chains }), trustWallet({ chains })],
    },
  ]);
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <NextHead>
          <title>SpaceCoin</title>
        </NextHead>

        {mounted && <Component {...pageProps} />}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;

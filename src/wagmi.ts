import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { arbitrum, fantomTestnet } from "wagmi/chains";
const chains = [fantomTestnet, arbitrum];

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

export const config = createConfig(
  getDefaultConfig({
    chains,
    autoConnect: true,
    appName: 'Super Referral',
    walletConnectProjectId: null,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          projectId: '...',
        },
      }),
    ],
  })
)

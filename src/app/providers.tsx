'use client'

import { ConnectKitProvider } from 'connectkit'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'

import { config } from '../wagmi'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="midnight"
        options={{
          walletConnectName: "Wallet Connect",
          // hideNoWalletCTA: true,
          // hideQuestionMarkCTA: true,
          // disclaimer: (
          //   <>
          //     By connecting your wallet you agree to the
          //     <a
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       href="https://en.wikipedia.org/wiki/Terms_of_service"
          //     >
          //       Terms of Service
          //     </a>{" "}
          //     and{" "}
          //     <a
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       href="https://en.wikipedia.org/wiki/Privacy_policy"
          //     >
          //       Privacy Policy
          //     </a>
          //   </>
          // ),
        }}
        customTheme={{
          "--ck-body-background": "#121418",
          "--ck-connectbutton-background": "#121418"
        }}

      >{mounted && children}</ConnectKitProvider>
    </WagmiConfig >
  )
}

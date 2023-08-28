'use client'

import { useAccount } from 'wagmi'

export function Connected({ children, flag = true }: { children: React.ReactNode, flag?: boolean }) {
  const { isConnected } = useAccount()
  if (!flag) {
    return isConnected ? null : <>{children}</>
  }
  return !isConnected ? null : <>{children}</>
}

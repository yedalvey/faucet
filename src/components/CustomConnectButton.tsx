"use client"
import { ConnectKitButton } from "connectkit";
import { Button } from 'antd'
import Image from 'next/image'

export const CustomButton = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                return (
                    <Button onClick={show} className="dei-button h-10">
                        {isConnected ? address : <div className="flex gap-2"><Image src="/wallet.svg" width={24} height={24} alt="wallet" />{"Connect Wallet"}</div>}
                    </Button>
                );
            }}
        </ConnectKitButton.Custom>
    );
};
"use client"
import { ConnectKitButton } from "connectkit";
import { Button } from 'antd'
export const CustomButton = () => {
    return (
        <ConnectKitButton.Custom>
            {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
                return (
                    <Button onClick={show} className="dei-button">
                        {isConnected ? address : "Connect Wallet"}
                    </Button>
                );
            }}
        </ConnectKitButton.Custom>
    );
};
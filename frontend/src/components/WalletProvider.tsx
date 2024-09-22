"use client";
import { MetaMaskProvider } from "@metamask/sdk-react";

export default function WalletProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Auditable Voting Dapp",
          url: 'https://abvs.vercel.app',
        },
        readonlyRPCMap: {
          "0xaa36a7": "https://ethereum-sepolia-rpc.publicnode.com",
          "0x8274f": "`https://sepolia-rpc.scroll.io",
          "0xe705": "https://rpc.sepolia.linea.build",
        }
      }}
      debug={false}
    >
      {children}
    </MetaMaskProvider>
  );
}
"use client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { sepolia, scrollSepolia } from "wagmi/chains";

export default function WalletProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: "Auditable Voting Dapp",
          url: 'https://abvs.vercel.app',
        },
      }}
      networks={[sepolia, scrollSepolia]}
      debug={false}
    >
      {children}
    </MetaMaskUIProvider>
  );
}
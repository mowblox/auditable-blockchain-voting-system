"use client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

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
    >
      {children}
    </MetaMaskUIProvider>
  );
}
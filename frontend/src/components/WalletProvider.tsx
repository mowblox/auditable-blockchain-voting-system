import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { createConfig} from 'wagmi';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { sepolia, scrollSepolia } from 'wagmi/chains';
import { rainbowMagicConnector } from './RainbowMagicConnector';
import { WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

const chains = [sepolia, scrollSepolia];

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [rainbowMagicConnector({ chains }) as any],
    }
  ],
  {
    projectId: 'your_project_id', 
    appName: 'TrueCast',
  }
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,         
  chains: [sepolia, scrollSepolia],  
});

export default function WalletProvider({
  children,
}: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

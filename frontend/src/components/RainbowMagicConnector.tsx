import { dedicatedWalletConnector } from '@magiclabs/wagmi-connector';

export const rainbowMagicConnector = ({ chains }: any) => ({
  id: 'magic',
  name: 'Magic',
  iconUrl: 'https://svgshare.com/i/iJK.svg',
  iconBackground: '#fff',
  createConnector: () => {
    const connector = dedicatedWalletConnector({
      chains: chains,
      options: {
        apiKey: process.env.NEXT_PUBLIC_MAGIC_API_KEY || '',
        enableEmailLogin: true,
        magicSdkConfiguration: {
          network: {
            rpcUrl: 'https://polygon-rpc.com', // your ethereum, polygon, or optimism mainnet/testnet rpc URL
            chainId: 137,
          },
        },
        //...Other options (check out full API below)
      },
    });
    return {
      connector,
    };
  },
});
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  gasReporter: {
    enabled: true
  },
  networks: {
    sepolia_testnet: {
      url: `https://ethereum-sepolia-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    ethereum_mainnet: {
      url: `https://ethereum-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    linea_sepolia: {
      url: `https://rpc.sepolia.linea.build/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    linea_mainnet: {
      url: `https://rpc.linea.build/`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  }
};

export default config;

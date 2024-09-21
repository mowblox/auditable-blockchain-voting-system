import { sepolia, scrollSepolia } from "wagmi/chains";
import { utils } from "web3";

export const getFactoryAddress = (chainId: string) => {
  switch (chainId) {
    case utils.toHex(sepolia.id):
      return '0x3e5213A1924b00f7aaAb88fBDF034a9910386FF1';
    case utils.toHex(scrollSepolia.id):
      return '0xF7E2Be9007fEaAcEB821D98011975A78034cCDC6';
    default:
      return '';
  }
}

export const ELECTION_FACTORY_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "electionAddress", "type": "address" }], "name": "ElectionCreated", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "_title", "type": "string" }, { "internalType": "string", "name": "_description", "type": "string" }, { "internalType": "bool", "name": "_isPublic", "type": "bool" }, { "internalType": "uint256", "name": "_startDate", "type": "uint256" }, { "internalType": "uint256", "name": "_endDate", "type": "uint256" }], "name": "createElection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_electionID", "type": "uint256" }], "name": "deleteElection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getElections", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getTotalElections", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
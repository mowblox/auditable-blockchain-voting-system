'use client';
import { ELECTION_FACTORY_ABI, getFactoryAddress } from "@/contracts/ElectionFactory";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Web3 from "web3";
import ElectionTitle from "./ElectionTitle";
import ElectionDescription from "./ElectionDescription";

export default function AllElections() {
  const [elections, setElections] = useState([]);
  const { provider, connected, chainId } = useSDK();

  useEffect(() => {
    // Call transaction
    if (connected && provider) {
      // Initialize web3
      const web3 = new Web3(provider);
      // Initialize contract
      const electionFactory = new web3.eth.Contract(ELECTION_FACTORY_ABI, getFactoryAddress(provider.getChainId()));
      // Invote method
      electionFactory
        .methods
        .getElections()
        .call()
        .then((addresses) => setElections(addresses as []))
        .catch(console.log);
    }
  }, [provider, connected, chainId])

  return (
    <div className="grid grid-cols-1 gap-4">
      {elections.map(address => (
        <Link href={`/elections/${address}`} key={address}>
          <div className="h-20 overflow-clip">
            <h1 className="text-2xl"><ElectionTitle address={address} /></h1>
            <p><ElectionDescription address={address} /></p>
          </div>
        </Link>
      ))}
    </div>
  );
}
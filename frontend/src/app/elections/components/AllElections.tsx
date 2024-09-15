'use client';
import { ELECTION_FACTORY_ABI, ELECTION_FACTORY_ADDRESS } from "@/contracts/ElectionFactory";
import { useSDK } from "@metamask/sdk-react-ui";
import Link from "next/link";
import { useEffect, useState } from "react";
import Web3 from "web3";

export default function AllElections() {
  const [elections, setElections] = useState([]);
  const { provider, connected } = useSDK();

  useEffect(() => {
    // Call transaction
    if (connected) {
      // Initialize web3
      const web3 = new Web3(provider);
      // Initialize contract
      const electionFactory = new web3.eth.Contract(ELECTION_FACTORY_ABI, ELECTION_FACTORY_ADDRESS);
      // Invote method
      electionFactory
        .methods
        .getElections()
        .call()
        .then((addresses) => setElections(addresses as []))
        .catch(console.log);
    }
  }, [provider, connected])

  return (
    <div>
      {elections.map(address => (
        <div key={address}>
          <Link href={`/elections/${address}`}>{address}</Link>
        </div>
      ))}
    </div>
  );
}
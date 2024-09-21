'use client';
import { ELECTION_ABI } from "@/contracts/Election";
import { useSDK } from "@metamask/sdk-react-ui";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function ElectionDescription({ address }: Readonly<{ address: string }>) {
  const [description, setDescription] = useState('');
  const { provider, connected } = useSDK();

  useEffect(() => {
    // Call transaction
    if (connected && provider) {
      // Initialize web3
      const web3 = new Web3(provider);
      // Initialize contract
      const election = new web3.eth.Contract(ELECTION_ABI, address);
      // Invote method
      election
        .methods
        .description()
        .call()
        .then(data => setDescription(String(data)))
        .catch(console.log);
    }
  }, [provider, connected])

  return <span>{description}</span>
}
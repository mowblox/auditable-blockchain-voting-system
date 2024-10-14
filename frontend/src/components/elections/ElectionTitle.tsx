'use client';
import { ELECTION_ABI } from "@/contracts/Election";
import { useSDK } from "@metamask/sdk-react";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function ElectionTitle({ address }: { address: string }) {
  const [title, setTitle] = useState('Loading...');
  const { provider, connected } = useSDK();

  useEffect(() => {
    let isMounted = true;

    const fetchTitle = async () => {
      if (connected && provider && address) {
        try {
          const web3 = new Web3(provider);
          const election = new web3.eth.Contract(ELECTION_ABI, address);
          
          const electionTitle: string = await election.methods.title().call();
          if (isMounted) {
            setTitle(electionTitle);
          }
        } catch (error) {
          console.error("Error fetching election title:", error);
          if (isMounted) {
            setTitle("Error loading title");
          }
        }
      }
    };

    fetchTitle();

    return () => {
      isMounted = false;
      setTitle(""); 
    };
  }, [provider, connected, address]); 

  return <span>{title}</span>;
}

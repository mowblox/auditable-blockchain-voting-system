"use client"

import { Fragment, useState } from "react";
interface AddressBoxProps {
  wallets: string[],
  walletCount: number,
  setWallets: React.Dispatch<React.SetStateAction<string[]>>,
  setWalletCount: React.Dispatch<React.SetStateAction<any>>
}

export default function AddressBox ({ wallets, walletCount, setWallets, setWalletCount } : AddressBoxProps) {

  const handleAddressChange = (e: any) => {
    const input = e.target.value;

    setWallets(input);
    setWalletCount(input)
  };
  
  return (
    <div className="text-[#939393] mb-10 sm:mb-32">
      <textarea 
        onChange={handleAddressChange}
        value={wallets}
        name="" 
        id="" 
        placeholder="Enter voters manually"
        className="bg-[transparent] border border-[#939393] w-full h-64 resize-none my-6 p-6 rounded-lg"
      ></textarea>
      <div className="text-sm sm:text-base flex justify-between items-center">
        <span>Enter each Voter’s address on a new line</span>
        <span>{ walletCount } Voter(s)</span>
      </div>
    </div>
  );
}
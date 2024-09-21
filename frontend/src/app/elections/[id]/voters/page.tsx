"use client"

import { Metadata } from "next";
import { useState } from "react";
import PanelComponent from "@/components/PanelComponent";
import AddressBox from "@/components/elections/AddressBox";

const metadata: Metadata = {
  title: "ABVS | Election Voters",
}


export default function ElectionVoters() {
  const [wallets, setWallets] = useState<string[]>([]);
  const [walletCount, setWalletCount] = useState(0);

  // Panels on voters page
  const VotersPanels = [
    {
      title: 'Enter Voters Manually',
      icon: 'add-candidate-icon.svg',
      slot: <AddressBox wallets={wallets} setWallets={setWallets} walletCount={walletCount} setWalletCount={setWalletCountMethod} />
    },
    {
      title: 'Import voters from  .CSV FILE',
      icon: 'upload-cloud.svg',
      slot: <span></span>,
      callback: uploadAddress
    }
  ]

  function uploadAddress() {
    document.getElementById('file-csv')?.click()
  }

  function setWalletCountMethod(input: string) {
    // Split addresse with newline and remove empty lines
    const walletAddresses = input.split("\n").map((address: string) => address.trim()).filter((address: string) => address !== "");
    setWalletCount(walletAddresses.length)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const text = event.target?.result as string;
        processCSV(text);
      };
      reader.readAsText(file);
      console.log(reader)
    }
  };

  // Pick my csv upload and set to wallet state
  const processCSV = (text: string) => {
    const lines = text.split('\n').map((line) => line.trim()).filter(Boolean) as any;
    // console.log('Wa', lines)
    setWallets(lines.join('\n'));
    setWalletCountMethod(text)
  };

  const submitAdress = () => {
    // awaiting API/smart contract call
    alert('submit')
  }


  return (
    <div className="mb-20 flex flex-col">
      {VotersPanels.map((panel, index) => (
        <PanelComponent
          title={panel.title}
          icon={panel.icon}
          index={index + 1}
          callback={panel?.callback}
          key={index}
        >
          {panel.slot}
        </PanelComponent>
      ))
      }
      <input type="file" name="" id="file-csv" accept=".csv" className="hidden" onChange={handleFileUpload} />
      <button className="mt-20 px-20 py-5 outline outline-1 outline-[#939393] rounded-full self-end"
        disabled={!wallets.length}
        onClick={submitAdress}
      >
        save
      </button>

      {/* <div>List or Table of Already Added Voters</div> */}
    </div>
  );
}
"use client";
import {
  ELECTION_FACTORY_ABI,
  getFactoryAddress,
} from "@/contracts/ElectionFactory";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Web3 from "web3";
import search from "../../../public/images/search-icon.svg";
import Image from "next/image";
import ElectionTitle from "./ElectionTitle";
import ElectionDescription from "./ElectionDescription";
import rectangle from "../../../public/images/Rectangle 7.svg";

export default function AllElections() {
  const [elections, setElections] = useState([]);
  const { provider, connected, chainId } = useSDK();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("public");

  useEffect(() => {
    // Call transaction
    if (connected && provider) {
      // Initialize web3
      const web3 = new Web3(provider);
      // Initialize contract
      const electionFactory = new web3.eth.Contract(
        ELECTION_FACTORY_ABI,
        getFactoryAddress(provider.getChainId())
      );
      // Invoke method
      electionFactory.methods
        .getElections()
        .call()
        .then((addresses) => setElections(addresses as []))
        .catch(console.log);
    }
  }, [provider, connected, chainId]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
        <div className="relative w-full md:w-[90%]">
          <Image
            src={search}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="search for election eg. SRC 2024 election"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 w-full bg-[#1B1A23] h-11"
          />
        </div>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="py-2 px-4 h-11 w-[80%] md:w-[18%] lg:w-[10%] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer transition-all duration-300 ease-in-out"
        >
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {elections.map((address) => (
          <Link href={`/elections/${address}`} key={address}>
            <div className="grid col-span-1 overflow-clip bg-[#1B1A23] rounded-xl p-6 h-72 mb-3 bg-gradient-to-r hover:from-[#4595DF] hover:to-primary transition-all duration-800 ease-in-out group leading-tight">
              <h1 className="text-2xl font-space-grotesk font-bold group-hover:text-[#fff]">
                <ElectionTitle address={address} />
              </h1>
              <Image src={rectangle as any} alt="Rectangle"/>
              <p className="text-subtle-text group-hover:text-[#fff]">
                <ElectionDescription address={address} />
              </p>
              <div className="flex items-end justify-end">
                <button className="bg-dark group-hover:bg-text group-hover:text-dark rounded-3xl py-2 px-4 mt-4 group-hover:font-bold">
                  See Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

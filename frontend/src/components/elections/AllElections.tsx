"use client";
import {
  ELECTION_FACTORY_ABI,
  getFactoryAddress,
} from "@/contracts/ElectionFactory";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Web3 from "web3";
import searchIcon from "../../../public/images/search-icon.svg";
import Image from "next/image";
import ElectionDescription from "./ElectionDescription";
import rectangle from "../../../public/images/Rectangle 7.svg";
import { ELECTION_ABI } from "@/contracts/Election";

interface Election {
  address: string;
  title: string;
  type: string; 
}

export default function AllElections() {
  const [elections, setElections] = useState<Election[]>([]);
  const { provider, connected, chainId } = useSDK();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("all");

  useEffect(() => {
    const fetchElections = async () => {
      if (connected && provider) {
        const web3 = new Web3(provider);
        const electionFactory = new web3.eth.Contract(
          ELECTION_FACTORY_ABI,
          getFactoryAddress(provider.getChainId())
        );

        try {
          const addresses = await electionFactory.methods.getElections().call();

          // Fetch titles for each election
          const fetchedElections = await Promise.all(
            addresses.map(async (address: string) => {
              const election = new web3.eth.Contract(ELECTION_ABI, address);
              const title = await election.methods.title().call();

              return {
                address,
                title, // Now using real titles fetched from the contract
                type: Math.random() > 0.5 ? "public" : "private", // Dummy type, update as necessary
              };
            })
          );

          setElections(fetchedElections);
        } catch (error) {
          console.error("Error fetching elections:", error);
        }
      }
    };

    fetchElections();
  }, [provider, connected, chainId]);

  // Filter elections based on search term and type
  const filteredElections = elections.filter((election) => {
    const matchesSearchTerm = election.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSearchType =
      searchType === "all" || election.type === searchType;

    return matchesSearchTerm && matchesSearchType;
  });


  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
        <div className="relative w-full md:w-[90%]">
          <Image
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search for election eg. SRC 2024 election"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 px-4 py-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 w-full bg-[#1B1A23] h-11"
          />
        </div>
        
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="py-2 px-4 h-11 w-[80%] md:w-[18%] lg:w-[12%] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer transition-all duration-300 ease-in-out"
        >
          <option value="all">All</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredElections.map((election) => (
          <Link href={`/elections/${election.address}`} key={election.address}>
            <div className="grid col-span-1 overflow-clip bg-[#1B1A23] rounded-xl p-6 h-72 mb-3 bg-gradient-to-r hover:from-[#4595DF] hover:to-primary transition-all duration-800 ease-in-out group leading-tight">
              <h1 className="text-2xl font-space-grotesk font-bold group-hover:text-[#fff]">
                {election.title} {/* Now the real election title */}
              </h1>
              <Image src={rectangle as any} alt="Rectangle" />
              <p className="text-subtle-text group-hover:text-[#fff]">
                <ElectionDescription address={election.address} />
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

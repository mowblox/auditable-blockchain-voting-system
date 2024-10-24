'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from "next/image";
import { useSDK } from "@metamask/sdk-react";
import Link from "next/link";
import { useEffect } from "react";
import { utils } from "web3";

export default function Header() {
  const { sdk, connected, chainId, account } = useSDK();

  useEffect(() => {
    if (localStorage.getItem("walletConnected") === "true") {
      connect();
    }
  }, []);

  const connect = async () => {
    try {
      await sdk?.connect();
      localStorage.setItem("walletConnected", "true");
      localStorage.setItem("account", account || "");
      localStorage.setItem("chainId", chainId || "");
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };

  const disconnect = async () => {
    try {
      await sdk?.terminate();
      localStorage.removeItem("walletConnected");
      localStorage.removeItem("account");
      localStorage.removeItem("chainId");
    } catch (err) {
      console.warn("failed to disconnect..", err);
    }
  };

  return (
    <header>
      <nav className=" bg-dark px-4 lg:px-6 py-2.5 justify-center ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mx-auto w-[90%]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={36}
              className='mb-6'
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

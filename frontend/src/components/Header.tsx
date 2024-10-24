'use client';
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
      <nav className="bg-dark px-4 lg:px-6 py-2.5 ">
        <div className="flex justify-between items-center mx-auto w-[90%]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={36}
            />
          </Link>
          <div className="flex items-center lg:order-2">
            {connected && account && chainId ? (
              <button
                className="py-2 px-4 md:py-2 md:px-6 rounded-3xl bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer text-text"
                onClick={disconnect}
              >
                {account.substring(0, 10)}... | {utils.hexToNumber(chainId)}
              </button>
            ) : (
              <button
                className="py-2 px-4 md:py-2 md:px-6 rounded-3xl bg-gradient-to-r from-primary to-[#4595DF] hover:from-[#4595DF] hover:to-primary cursor-pointer text-text"
                onClick={connect}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

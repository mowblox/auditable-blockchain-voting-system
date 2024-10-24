'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from "next/image";
import Link from "next/link";


export default function Header() {

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

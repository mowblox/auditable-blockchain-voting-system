import Image from "next/image";
import ConnectButton from "./ConnectButton";


export default function Header() {
  return (
    <header>
      <nav className="bg-dark px-4 lg:px-6 py-2.5 ">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <a href="/">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={36}
            />
          </a>
          <div className="flex items-center lg:order-2">
            <a href="#" className="text-subtle-text font-medium text-sm px-4">election</a>
            <a href="#" className="text-subtle-text font-medium text-sm px-4">vote</a>
            <a href="#" className="text-dark bg-text rounded-full text-sm px-4 lg:px-5 py-1 lg:py-1.5 mr-2 ml-5 flex">
              <ConnectButton/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}


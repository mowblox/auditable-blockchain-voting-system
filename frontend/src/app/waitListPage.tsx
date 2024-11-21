import React from "react";
import Image from "next/image";
import bell from "../../public/images/bell.png";
import { Separator } from "@radix-ui/react-select";
import mowblox from "../../public/images/mowblox.png";
import scroll from "../../public/images/scroll.png";
import creya from "../../public/images/creya.png";
import sheild from "../../public/images/Shield.svg";
import lighting from "../../public/images/Lightning.svg";
import user from "../../public/images/User.svg";

const waitListPage = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-28">
      <section className="items-center flex flex-col gap-28">
        <div className="flex flex-col items-center w-[40%]">
          <h1 className="text-7xl font-bold text-center">
            Future Of Fair Elections
          </h1>
          <p className="text-center mt-6 w-[80%] text-subtle-text leading-loose">
            Remember that feeling after casting your vote? That moment of "I
            hope it makes it"? Yeah, we weren't fans either. That's why we’re
            building something better.
          </p>
          <form className="flex py-2 px-2 rounded-full bg-[#0707074D] align-middle items-center w-full mt-12  focus-within:border-primary focus-within:ring-1 focus-within:ring-primary ">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#0707074D] rounded-full p-3 focus:outline-none focus:[#0707074D] "
            />
            <button
              type="submit"
              className="bg-primary text-white w-[50%] p-3 rounded-full focus:outline-none hover:from-[#ffffff] hover:to-primary"
            >
              Get notified
              <Image
                src={bell}
                alt="Notification bell"
                width={20}
                height={20}
                className="inline ml-2"
              />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1>Support by</h1>
          <div className="flex items-center space-x-12">
            <Image src={mowblox} alt="Mowblox" width={100} height={100} />
            <Separator
              data-orientation="vertical"
              className="w-[1px] h-4 bg-subtle-text"
            />
            <Image src={scroll} alt="Scroll" width={100} height={100} />
            <Separator
              data-orientation="vertical"
              className="w-[1px] h-4 bg-subtle-text"
            />
            <Image src={creya} alt="Creya" width={100} height={100} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-28">
        <h1 className="text-3xl font-bold text-center w-[40%]">
          Your elections{" "}
          <span className="text-primary">secured, anywhere, anytime.</span>
        </h1>
        <div className="flex justify-between w-[80%]">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Bulletproof Security</h1>
            <p className="text-subtle-text w-[60%] leading-loose">
              Each vote is sealed with blockchain technology, making tampering
              impossible. Trust isn't promised – it's guaranteed.
            </p>
          </div>
          <Image src={sheild} alt="Sheild" />
        </div>

        <div className="flex justify-between w-[80%]">
          <Image src={lighting} alt="Lighting" />
          <div className="w-[50%] items-end">
            <div className="flex flex-col gap-4  ">
              <h1 className="text-3xl font-bold">Real-Time Tracking</h1>
              <p className="text-subtle-text w-[80%] leading-loose">
                Watch results roll in live. Our blockchain tech guarantees every
                vote counts, securing a transparent and trustworthy election
                process.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-[80%]">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Voter Verification</h1>
            <p className="text-subtle-text w-[60%] leading-loose">
              Import your voter list, send invitations, and let the system
              handle verification. Democracy has never been this easy.
            </p>
          </div>
          <Image src={user} alt="User" />
        </div>
      </section>

      <section className="w-[80%] m-auto flex justify-center">
        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="text-3xl w-[80%] mx-auto text-center font-bold">
            Ready to experience{" "}
            <span className="text-primary">the future of voting?</span>
          </h1>
          <p className="text-center text-subtle-text leading-loose">
            Be one of the first to bring secure, modern elections to your
            organization or community. Drop your email below to get early access
            to our platform.
          </p>

          <form className="flex py-2 px-2 rounded-full bg-[#1D57C21A] align-middle items-center w-full mt-12  focus-within:border-primary focus-within:ring-1 focus-within:ring-primary ">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#0707074D] rounded-full p-3 focus:outline-none focus:[#0707074D] "
            />
            <button
              type="submit"
              className="bg-primary text-white w-[50%] p-3 rounded-full focus:outline-none hover:from-[#ffffff] hover:to-primary"
            >
              Get notified
              <Image
                src={bell}
                alt="Notification bell"
                width={20}
                height={20}
                className="inline ml-2"
              />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default waitListPage;

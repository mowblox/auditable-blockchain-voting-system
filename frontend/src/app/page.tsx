import { Metadata } from "next";
import heroIcon from "../../public/images/hero-bg.png";
import underline from "../../public/images/white-underline.png";
import handsup from "../../public/images/hands-up-illus.png";
import blueUnderline from "../../public/images/blue-underline.png";
import callout from "../../public/images/callout-illus.png";
import gradient from "../../public/images/Gradient.png";
import king from "../../public/images/king-illus.png";
import smile from "../../public/images/smiley-illus.png";
import cardGradient from "../../public/images/card-gradient.png";
import gradient2 from "../../public/images/Gradient-2.png";

export const metadata: Metadata = {
  title: "ABVS | Landing",
};

export default function Landing() {
  return (
    <div className="relative">
      <img
        src={heroIcon.src}
        alt="hero"
        className="w-full h-auto object-cover absolute -z-10 opacity-85"
      />
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-[55%] justify-center text-center">
          <h2 className="font-space-grotesk font-bold text-[52px] gradient-text">
            Decentralized Democracy for Everyone
          </h2>
          <img
            src={underline.src}
            alt="underline"
            className="w-[300px] mx-auto "
          />
          <p className="w-[80%] m-auto mt-6 text-subtle-text">
            By transforming your group into a mini DAO, you can harness the
            power of decentralization to make informed decisions collectively.
          </p>
          <div className="gap-8 flex justify-center mt-6">
            <button className="py-2 px-6 rounded-3xl w-[180px] bg-gradient-to-r from-primary to-[#4595DF]">
              create Election
            </button>
            <button className="bg-dark border border-white py-2 px-6 rounded-3xl w-[180px]">
              cast Vote
            </button>
          </div>
        </div>
      </div>
      <div className="justify-center flex flex-col gap-60">
        <h3 className="font-space-grotesk text-center font-bold text-[26px]">
          What you can do with ABVS
        </h3>

        <div className="relative">
          <img src={gradient.src} alt="gradient" className="absolute left-0" />
          <div className="flex w-[80%] m-auto justify-between">
            <div className="w-[50%]">
              <h3 className="text-[38px] font-bold font-space-grotesk gradient-text-vertical">
                Create Your Mini DAO
              </h3>
              <img
                src={blueUnderline.src}
                alt="blue-underline"
                className="w-[180px]"
              />
              <p className="text-subtle-text mt-8">
                Easily establish a decentralized autonomous organization
                tailored to your group's specific needs and goals.
              </p>
            </div>
            <img src={handsup.src} alt="handsup" />
          </div>
        </div>

        <div className="w-[80%] m-auto flex justify-between">
          <img src={callout.src} alt="handsup" />
          <div className="w-[55%] text-end relative">
            <h3 className="text-[38px] font-bold font-space-grotesk gradient-text-vertical">
              Initiate and Vote on Proposals
            </h3>
            <img
              src={blueUnderline.src}
              alt="blue-underline"
              className="w-[180px] right-0 absolute"
            />
            <p className="text-subtle-text mt-14">
              Propose new ideas, projects, or initiatives, and securely cast
              your vote on matters that impact your community.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={cardGradient.src}
            alt="gradient"
            className="absolute right-0"
          />
          <div className="flex w-[80%] m-auto justify-between">
            <div className="w-[50%]">
              <h3 className="text-[38px] font-bold font-space-grotesk gradient-text-vertical">
                Track and Verify Results
              </h3>
              <img
                src={blueUnderline.src}
                alt="blue-underline"
                className="w-[180px]"
              />
              <p className="text-subtle-text mt-8">
                Maintain complete transparency with real-time voting updates and
                an immutable record of all decisions.
              </p>
            </div>
            <img src={king.src} alt="handsup" className="w-[20%]" />
          </div>
        </div>

        <div className="relative">
          <img src={gradient2.src} alt="gradient" className="absolute left-0" />
          <div className="flex w-[80%] m-auto justify-between border  border-primary rounded-3xl">
            <div className="w-[55%] flex flex-col gap-4 py-28  pl-32">
              <h3 className="text-[38px] font-bold font-space-grotesk gradient-text">
                More than just a voting platform
              </h3>
              <p className="text-subtle-text">
                Propose new ideas, projects, or initiatives, and securely cast
                your vote on matters that impact your community.
              </p>
              <button className="py-4 px-6 rounded-3xl w-[180px] bg-gradient-to-r from-primary to-[#4595DF]">
                Get started
              </button>
            </div>
            <div className="flex w-auto justify-end items-end">
              <img src={smile.src} alt="smile" className="w-[60%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

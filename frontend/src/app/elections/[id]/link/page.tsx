import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "ABVS | Election Link",
};

export default function ElectionLink() {
  const placeholder="https://abvs.com/elections/legonsrc/term1";
  // const [electionLink,setElectionLink] = useState<string>(placeholder);
  return (
    <div className="w-[70%]">
      <div className="w-[82%] mb-8 flex-row gap-x-[6px]">
        <h1 className="text-xl ">Your election sharing URL</h1>
        <p className="text-subtle-text font-roboto-flex">
          This is your election link. Your voters can only vote with this link
          generated.
        </p>
      </div>
      <div className="flex-row justify-center mb-11 w-[100%]">
          <p className="text-subtle-text md:py-7 lg:py-8 sm:py-7 py-7 bg-[#4C9FE40D] w-[100%] font-roboto-flex ps-6 rounded-[4px]">{placeholder}</p>
      </div>
      <div className="justify-center">
      <button className="py-[18px] bg-secondary rounded-[4px] w-[100%] font-space-grotesk text-dark">Copy Sharing Link</button>
      </div>
      

      <div className="flex justify-end  mb-8">
        <button className="mt-20 md:mt-[92px] py-[18px] px-[47px] rounded-[50px] bg-gradient-to-r from-primary to-secondary">View Election</button>
      </div>
    </div>
  );
}

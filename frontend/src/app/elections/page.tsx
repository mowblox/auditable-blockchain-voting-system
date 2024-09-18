import { Metadata } from "next";
import AllElections from "./components/AllElections";

export const metadata: Metadata = {
  title: "ABVS | Elections",
}

export default function Elections() {
  return (
    <div className="p-4 md:p-6 lg:p-8 mb-32 lg:mb-0">
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="gradient-text-vertical text-[32px] md:text-[40px] lg:text-[50px] font-bold font-space-grotesk">
          Have a look at all elections
        </h1>
        <p className="text-subtle-text text-[16px] md:text-[18px]">
          Turpis non molestie amet tortor. Diam amet volutpat
        </p>
      </div>
      <AllElections />
    </div>
  );
}
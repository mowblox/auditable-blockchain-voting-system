import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Election Verify",
};

export default function ElectionVerify() {
  return (
    <main className="w-full flex items-center justify-center mb-40">
      <div className="flex flex-col gap-10 w-full md:max-w-[639px]">
        <div className="flex flex-col">
          <span className="text-base md:text-xl">
            Paste election url link here to have access to vote
          </span>
          <span className="text-subtle-text text-xs md:text-base">
            Turpis non molestie amet tortor. Diam amet volutpat
          </span>
        </div>
        <input
          type="text"
          placeholder="https://abvs.com/elections/legonsrc/team1"
          className=" w-full bg-gray p-5 focus:outline-none rounded-md"
        />
        <button className="w-full bg-secondary text-dark p-5 rounded-md">submit</button>
      </div>
    </main>
  );
}

'use client';
import { useParams } from "next/navigation";
import ElectionTitle from "./ElectionTitle";
import ElectionDescription from "./ElectionDescription";

interface Candidates {
  id: number;
  name: string;
}

export default function ElectionSummary() {
  const { id }: { id: string } = useParams();

  const candidates: Candidates[] = [
    { id: 1, name: "Joshua Mensah" },
    { id: 2, name: "Alisson Newton" },
    { id: 3, name: "James Hammond" },
    { id: 4, name: "Michael Brown" },
  ];

  return (
    <div className="w-[80%]">
      <div>
        <div className="gap-[12px]">
          <h2 className="">Election Title</h2>
          <p className="text-subtle-text mt-3">
            <ElectionTitle address={id} />
          </p>
        </div>

        <div className="mt-12">
          <h2>Description</h2>

          <p className="mt-3 text-subtle-text">
            <ElectionDescription address={id} />
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-space-grotesk ">Election Period</h2>
          <p className="text-subtle-text text-start mt-3">
            Aug 17, 2024 - Aug 29, 2024
          </p>
        </div>

        <div className="mt-12">
          <h2>Election Type</h2>
          <p className="text-subtle-text mt-3">Private</p>
        </div>

        <div className="mt-12">
          <h2>Candidates</h2>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate.id} className="text-subtle-text mt-3">
                {candidate.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="my-12">
          <h2>Voter Count</h2>
          <p className="text-subtle-text mt-3">24</p>
        </div>
      </div>
      <div className="flex md:flex-row mt-[103px] items-center mb-4 gap-8">
        <button className="text-nowrap h-14 text-center md:px-10 md:py-2 px-14 border-2 border-subtle-text rounded-[50px]">
          save draft
        </button>
        <button className=" h-14 rounded-[50px] sm:self-center md:mt-2 text-center bg-gradient-to-r from-primary to-secondary px-[75px]">
          <span className="text-nowrap">publish election link</span>
        </button>
      </div>

      <div>

      </div>
    </div>
  );
}
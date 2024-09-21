import AddCandidate from "@/components/elections/AddCandidate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Election Candidates",
}

export default function ElectionCandidates() {
  return (
    <div>
      <AddCandidate />
      <div>List or Table of Already Added Candidates</div>
    </div>
  );
}
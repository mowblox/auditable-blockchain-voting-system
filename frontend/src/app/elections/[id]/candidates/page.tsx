import { Metadata } from "next";
import AddCandidate from "./components/AddCandidate";

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
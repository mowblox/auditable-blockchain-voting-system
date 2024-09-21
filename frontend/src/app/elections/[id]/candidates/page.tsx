import AddCandidate from "@/components/elections/AddCandidate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Election Candidates",
}

export default function ElectionCandidatesPage() {
  return (
    <div>
      <AddCandidate />
    </div>
  );
}
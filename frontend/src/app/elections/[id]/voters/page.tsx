import { Metadata } from "next";
import AddVoters from "./components/AddVoters";

export const metadata: Metadata = {
  title: "ABVS | Election Voters",
}

export default function ElectionVoters() {
  return (
    <div>
      <AddVoters />
      <div>List or Table of Already Added Voters</div>
    </div>
  );
}
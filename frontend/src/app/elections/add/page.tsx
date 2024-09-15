import TopNav from "@/components/TopNav";
import AddElectionForm from "./components/AddElectionForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Add Election",
}

export default function AddElection() {
  return (
    <>
      <div className="mb-8">
        <TopNav disabled />
      </div>
      <div className="w-full mb-28">
        <AddElectionForm />
      </div>
    </>
  );
}
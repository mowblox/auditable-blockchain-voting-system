import AddElectionForm from "@/components/elections/AddElectionForm";
import TopNav from "@/components/TopNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Add Election",
}

export default function AddElectionPage() {
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
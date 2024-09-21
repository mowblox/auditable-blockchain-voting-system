import ElectionSummary from "@/components/elections/ElectionSummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Election Summary",
};

export default function ElectionSummaryPage() {
  return (
    <div>
      <ElectionSummary />
    </div>
  );
}

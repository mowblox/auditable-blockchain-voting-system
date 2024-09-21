import ElectionDetail from "@/components/elections/ElectionDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ABVS | Election Detail",
}

export default function ElectionDetailPage() {
  return (
    <div>
      <ElectionDetail />
    </div>
  );
}
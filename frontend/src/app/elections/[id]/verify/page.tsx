import { Metadata } from "next";
import VerifyVoter from "./components/VerifyVoter";

export const metadata: Metadata = {
  title: "ABVS | Election Verify",
};

export default function ElectionVerify() {
  return (
    <main className="w-full flex items-center justify-center mb-40">
      <VerifyVoter />
    </main>
  );
}

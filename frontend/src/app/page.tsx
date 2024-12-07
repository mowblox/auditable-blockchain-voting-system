import { Metadata } from "next";
import LandingContent from './landingPage';
import WaitListPage from "./waitListPage";

export const metadata: Metadata = {
  title: "TrueCast | Landing",
};

export default function LandingPage() {
  return <WaitListPage />;
}

import { Metadata } from "next";
import LandingContent from "./landingPage";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ABVS | Landing",
};

export default function LandingPage() {
  return (
    <>
      <LandingContent />
      <Footer />
    </>
  );
}

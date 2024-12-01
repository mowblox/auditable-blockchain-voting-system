"use client";
import { useState } from "react";
import { AppSidebar } from "@/components/AppSideBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import CreateElectionSection from "./createElection"; // Import the initial component
import CandidatesSection from "../../../components/elections/AddCandidate"; // Import other sections
import VotersSection from "../../../components/elections/VerifyVoter"; // Import other sections
import SummarySection from "../../../components/elections/ElectionSummary"; // Import other sections
import LinkSection from "../../../components/elections/VerifyVoter"; // Import other sections

export default function CreateElectionsNav() {
  const params = useParams();
  const id = params?.id as string | undefined;
  const pathname = usePathname();

  // Manage the active tab using state
  const [activeTab, setActiveTab] = useState<string>("Election");

  const tabs = [
    { name: "Election", href: `/elections/${id}` },
    { name: "Candidates", href: `/elections/${id}/candidates` },
    { name: "Voters", href: `/elections/${id}/voters` },
    { name: "Summary", href: `/elections/${id}/summary` },
    { name: "Link", href: `/elections/${id}/link` },
  ];

  // Function to handle tab click and update the active tab
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/* Render the tab navigation */}
          <div className="tabs-container  px-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name)}
                className={`${
                  activeTab === tab.name
                    ? "border-b-2 border-[#4C9FE4] text-[#4C9FE4]"
                    : "text-subtle-text"
                } py-4 mr-6 lg:mr-14 text-[12px] md:text-[16px] lg:text-[18px] font-space-grotesk`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Render the content based on active tab */}
          <div className="tab-content p-4">
            {activeTab === "Election" && <CreateElectionSection />}
            {activeTab === "Candidates" && <CandidatesSection />}
            {activeTab === "Voters" && <VotersSection />}
            {activeTab === "Summary" && <SummarySection />}
            {activeTab === "Link" && <LinkSection />}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

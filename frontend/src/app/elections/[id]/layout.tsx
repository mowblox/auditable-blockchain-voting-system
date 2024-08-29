import TopNav from "@/components/TopNav";

export default function ElectionDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="tabs mb-8">
        <TopNav />
      </div>

      {/* Displaying Tab content */}
      <div className="tab-content">{children}</div>
    </>
  );
}
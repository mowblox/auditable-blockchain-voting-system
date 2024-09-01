import TopNav from "@/components/TopNav";

export default function ElectionDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mb-8">
        <TopNav />
      </div>
      {children}
    </>
  );
}
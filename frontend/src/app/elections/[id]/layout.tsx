import TopNavWrapper from "@/components/TopNavWrapper";

export default function ElectionDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNavWrapper />
      {children}
    </>
  );
}
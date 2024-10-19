import SideBarWrapper from "@/components/SideBarWrapper";

export default function ElectionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full px-4 lg:px-0 text-text">
      <div className="md:w-[90%] m-auto flex flex-col lg:flex-row mt-14 gap-14">
        <SideBarWrapper />
        <div className="mt-8 lg:mt-0 lg:ml-10 w-full lg:w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
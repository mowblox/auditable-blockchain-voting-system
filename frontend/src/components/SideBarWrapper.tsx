'use client';
import { useParams, usePathname } from "next/navigation";
import SideBar from "./SideBar";

export default function SideBarWrapper() {
  const { id } = useParams();
  const pathname = usePathname();

  const excludes = [
    `/elections/${id}/results`,
  ];

  return (
    <>
      {excludes.includes(pathname) ? '' : <SideBar />}
    </>
  );
}
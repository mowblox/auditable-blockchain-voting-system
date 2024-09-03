'use client';
import { useParams, usePathname } from "next/navigation";
import TopNav from "./TopNav";

export default function TopNavWrapper() {
  const { id } = useParams();
  const pathname = usePathname();

  const excludes = [
    `/elections/${id}/verify`,
    `/elections/${id}/vote`,
    `/elections/${id}/results`,
  ];

  return (
    <>
      {excludes.includes(pathname) ? '' : (
        <div className="mb-8">
          <TopNav />
        </div>
      )}
    </>
  );
}
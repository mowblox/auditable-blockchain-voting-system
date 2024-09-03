'use client';
import { useParams, usePathname } from "next/navigation";

export default function SideBar() {
  const { id } = useParams();
  const pathname = usePathname();

  const infos = [
    {
      h1: `Let's create an election`,
      p: `Launch your election and watch the results unfold.`,
      href: `/elections/${id}`
    },
    {
      h1: `Add Candidates`,
      p: `In easy steps, add details of candidates who will be contesting in the election.`,
      href: `/elections/${id}/candidates`
    },
    {
      h1: `Add Voters`,
      p: `Turpis non molestie amet tortor. Diam amet volutpat.`,
      href: `/elections/${id}/voters`
    },
    {
      h1: `Election Summary`,
      p: `Turpis non molestie amet tortor. Diam amet volutpat`,
      href: `/elections/${id}/summary`
    },
    {
      h1: `Let's Vote`,
      p: `Turpis non molestie amet tortor. Diam amet volutpat`,
      href: `/elections/${id}/link`
    },
    {
      h1: `Check Eligibility`,
      p: `Turpis non molestie amet tortor. Diam amet volutpat`,
      href: `/elections/${id}/verify`
    },
    {
      h1: `Vote Now`,
      p: `Turpis non molestie amet tortor. Diam amet volutpat`,
      href: `/elections/${id}/vote`
    },
  ];

  return (
    <div className="lg:w-[25%]">
      <h2 className="gradient-text font-bold text-[32px] lg:text-[45px] font-space-grotesk leading-tight">
        {infos.find(info => info.href === pathname)?.h1 || `Let's create an election`}
      </h2>
      <p className="text-subtle-text text-[16px] lg:w-[80%]">
        {infos.find(info => info.href === pathname)?.p || `Launch your election and watch the results unfold.`}
      </p>
    </div>
  );
}
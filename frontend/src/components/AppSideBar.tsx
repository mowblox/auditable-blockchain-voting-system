import { TrophyIcon, Home, ThumbsUp, Folder, UserPlus2 } from "lucide-react"
import Image from 'next/image'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/home/",
    icon: Home,
  },
  {
    title: "Create election",
    url: "#",
    icon: UserPlus2,
  },
  {
    title: "Election hub",
    url: "#",
    icon: TrophyIcon,
  },
  {
    title: "Vote",
    url: "#",
    icon: ThumbsUp,
  },
  {
    title: "My election",
    url: "#",
    icon: Folder,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="mt-6 pl-8">
        <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
        </SidebarHeader>
      <SidebarContent className="pl-5">
        <SidebarGroup>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu className="gap-8">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="py-4 font-space-grotesk text-[20px]">
                    <a href={item.url} className="hover:text-primary cursor-pointer">
                      <item.icon/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

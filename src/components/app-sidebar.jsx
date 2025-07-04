import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  ToolCase,
  FileSliders,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Karaninder Singh",
    email: "karaninder.yps@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Groot",
      logo: GalleryVerticalEnd,
      plan: "Serious",
    },
    {
      name: "Grumpy",
      logo: AudioWaveform,
      plan: "Mean",
    },
    {
      name: "Gay",
      logo: Command,
      plan: "Happy",
    },
  ],
  navMain: [
    {
      title: "Assistant",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#"
        },
        {
          title: "Notes",
          url: "#"
        },
        {
          title: "Calendar",
          url: "#"
        },
        {
          title: "Memory",
          url: "#"
        },
        {
          title: "Tasks",
          url: "#"
        },
      ],
    },
    {
      title: "Tools",
      url: "#",
      icon: ToolCase,
      items: [
        {
          title: "Pluggins",
          url: "#",
        },
        {
          title: "Apps",
          url: "#",
        },
        {
          title: "Mood",
          url: "#",
        },
      ],
    },
    {
      title: "System",
      url: "#",
      icon: FileSliders,
      items: [
        {
          title: "Profile",
          url: "#",
        },
        {
          title: "Logs",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    }
  ]
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="icon" className="text-lg" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

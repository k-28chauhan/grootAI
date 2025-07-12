import * as React from "react"
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  ToolCase,
  FileSliders,
  SquareTerminal,
} from "lucide-react"
import { useSidebar } from "../../components/ui/sidebar"
import { NavMain } from "../nav/nav-main"
import { NavUser } from "../nav/nav-user"
import { TeamSwitcher } from "../team/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger
} from "@/components/ui/sidebar"
import { useAuthStore } from "../../store/todo-list"


export function AppSidebar({
  ...props
}) {
  const userProfile = useAuthStore((state) => state.userProfile);
// This is sample data.
const data = {
  user: {
    name: userProfile?.name || "No Name",
    email: userProfile?.email || "No Email",
    avatar: userProfile?.picture || "/avatars/shadcn.jpg",
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

  const { state } = useSidebar();
  const trigger = state==="collapsed" ? "" : "hidden";

  return (
    <Sidebar collapsible="icon" className="text-lg" {...props}>
      <SidebarHeader>
        <SidebarTrigger className={`${trigger}`}/>
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

"use client";
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useStore } from "zustand"
import useSidebarStore from "@/stores/useSidebarStore";

// const data = {
//     navMain: [
//         {
//         id: 1,
//         title: "Getting Started",
//         url: "/getting-started",
//         items: [
//             {
//             title: "Character Creator",
//             url: "/character-creator",
//             isActive: true,
//             },
//             {
//             title: "Bio",
//             url: "/bio",
//             },
//         ],
//         },
//         {
//         id: 2,
//         title: "World",
//         url: "/world",
//         items: [
//             {
//             title: "Property",
//             url: "/property",
//             },
//             {
//             title: "Forest",
//             url: "/forest",
//             },
//             {
//             title: "Magic Pool",
//             url: "/magic-pool",
//             },
//         ],
//         }
//     ]
// };

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const navMain = useSidebarStore((state) => state.navMain);
    return (
    <Sidebar {...props}>
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive} id={item.id}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
    )
}

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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const navMain = useSidebarStore((state) => state.navMain);
    const activeLink = useSidebarStore((state) => state.activeLink);
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
                  // if the item's id matches the activeLink we set isActive to true
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.id === activeLink} id={item.id}>
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

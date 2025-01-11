import { create } from "zustand";

interface SidebarState {
    navMain: Array<object>
    // toggleActive: (id: number) => void
    setActiveLink: (id: number) => void
    activeLink: number
}

const useSidebarStore = create<SidebarState>()((set) => ({
    // define navigation item
    activeLink: 0,
    navMain: [
        {
        id: 1,
        title: "Getting Started",
        url: "/getting-started",
        items: [
            {
            id: 11,
            title: "Character Creator",
            url: "/character-creator",
            isActive: false,
            },
            {
            id: 12,
            title: "Bio",
            url: "/bio",
            isActive: false,
            },
        ],
        },
        {
        id: 2,
        title: "World",
        url: "/world",
        items: [
            {
            id: 21,
            title: "Property",
            url: "/property",
            isActive: false,
            },
            {
            id: 22,
            title: "Forest",
            url: "/forest",
            isActive: false,
            },
            {
            id: 23,
            title: "Magic Pool",
            url: "/magic-pool",
            isActive: false,
            },
        ],
        }
    ],
    setActiveLink: (id) => 
        set((state) => ({
            activeLink: id
        }))
}));

export default useSidebarStore;
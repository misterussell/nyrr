import { create } from "zustand";

type SidebarState = {
    navMain: Array<object>;
    toggleActive: () => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
    navMain: [
        {
        id: 1,
        title: "Getting Started",
        url: "#",
        items: [
            {
            id: 11,
            title: "Character Creator",
            url: "#",
            isActive: false,
            },
            {
            id: 12,
            title: "Bio",
            url: "#",
            isActive: false,
            },
        ],
        },
        {
        id: 2,
        title: "World",
        url: "#",
        items: [
            {
            id: 21,
            title: "Home",
            url: "#",
            isAvtive: false,
            },
            {
            id: 22,
            title: "Forest",
            url: "#",
            isActive: false,
            },
            {
            id: 23,
            title: "Magic Pool",
            url: "#",
            isActive: false,
            },
        ],
        }
    ],
    toggleActive: (id) => 
        set((state) => ({
            navMain: state.navMain.map((navGroup) =>
                navGroup.items.map((navItem) =>
                    navItem.id === id ? { ...navItem, isActive: !navItem.isActive } : navItem, 
                ),
            ),
        })),
}));

export default useSidebarStore;
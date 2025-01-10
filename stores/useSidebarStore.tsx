import { create } from "zustand";

interface SidebarState {
    navMain: Array<object>
    toggleActive: (id: number) => void
}

const useSidebarStore = create<SidebarState>()((set) => ({
    // define navigation item
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
        url: "property",
        items: [
            {
            id: 21,
            title: "Property",
            url: "/property",
            isAvtive: false,
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
    // update isActive state of navigation item
    // this doesn't update. research needed
    toggleActive: (id) => 
        set((state) => ({
            navMain: state.navMain.map((navGroup) => {
                console.log(id);
                const updatedItems = navGroup.items.map((item) => {
                    return item.id === id ? { ...item, isActive: !item.isActive } : item;
                });
            return { ...navGroup, items: updatedItems };    
            }),
        })),
}));



export default useSidebarStore;
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
        url: "/#",
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
        url: "property",
        items: [
            {
            id: 21,
            title: "Property",
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
    // update isActive state of navigation item
    // store is not persistent on page refresh
    toggleActive: (id) => 
        set((state) => ({
            navMain: state.navMain.map((navGroup) => {
                console.log(id)
                const updatedItems = navGroup.items.map((item) => {
                    return item.id === id ? { ...item, isActive: !item.isActive } : item;
                });
            return { ...navGroup, items: updatedItems };    
            }),
        })),
}));

export default useSidebarStore;
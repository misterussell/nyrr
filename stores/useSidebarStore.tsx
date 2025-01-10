import { create } from "zustand";

type SidebarState = {
    navMain: Array<object>;
    toggleActive: (id: number) => void;
}

const useSidebarStore = create<SidebarState>((set) => ({
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
    toggleActive: (id) => 
        set((state) => ({
            navMain: state.navMain.map((navGroup) => {
                const updatedItems = navGroup.items.map((item) => {
                    console.log(item.id)
                    return item.id === id ? { ...item, isActive: !item.isActive } : item;
                });
            return { ...navGroup, items: updatedItems };    
            }),
        })),
}));

// data.map((navGroup) => {
//     return navGroup.items.map((item) => {
//       console.log(item)
//       return item.id === 11 ? { ...item, isActive: !item.isActive} : item;
//  });
// });



export default useSidebarStore;
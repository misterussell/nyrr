import { create, useStore } from 'zustand';

interface appState {
    background: string;
    setBackground: (background: string) => void;
    gender: string;
    setGender: (gender: string) => void;
    race: string;
    setRace: (race: string) => void;
    zodiac: string;
    setZodiac: (zodiac: string) => void;
}

const useAppStore = create<appState>((set) => ({
    background: "",
    setBackground: (background) => set((state) => ({ background })),
    gender: "",
    setGender: (gender) => set((state) => ({ gender })),
    race: "",
    setRace: (race) => set((state) => ({ race })),
    zodiac: "",
    setZodiac: (zodiac) => set((state) => ({ zodiac })),
}));

export default useAppStore;
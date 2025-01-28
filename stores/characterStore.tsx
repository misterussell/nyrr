import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

interface characterState {
    // xid: string;
    // background: string;
    // createdAt: Date;
    // effective_battleStats: object;
    // gender: string;
    // level: number;
    // netWorth: number;
    // race: string;
    // status: string;
    // username: string;
    // zodiac: string;
    character: object;
    setCharacter: (character: object) => void;
};

const useCharacterStore = create<characterState>((set) => ({
    character: {},
    setCharacter: (character) => set((state) => ({ character })),
}));

export default useCharacterStore;

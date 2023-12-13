import { create } from "zustand";
import { CountStore } from "./types";

export const useCountStore = create<CountStore>((set) => ({
    count: 0,
        actions: {
        increament: () => {
            set((state) => ({ ...state, count: state.count + 1 }))
        },
            decreament: () => {
                set((state) => ({ ...state, count: state.count - 1 }))
            },
    }
}))
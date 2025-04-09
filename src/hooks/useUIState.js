import { create } from "zustand";

export const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://plus.unsplash.com/premium_photo-1676923902105-19d5c90d585c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

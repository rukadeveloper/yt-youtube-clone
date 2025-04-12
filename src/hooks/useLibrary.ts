import { create } from "zustand";

interface Library {
  clickedContent: string;
  setClickedContent: (clickedContent: string) => void;
}

const useLibrary = create<Library>((set) => ({
  clickedContent: "",
  setClickedContent: (clickedContent: string) => set({ clickedContent }),
}));

export default useLibrary;

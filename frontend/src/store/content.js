import { create } from "zustand";

export const useContentStore = create((set) => ({
  contentType: "movie",
  setContentType: (Type) => set({ contentType: Type }),
}));

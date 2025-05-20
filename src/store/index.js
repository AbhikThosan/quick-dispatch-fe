import { create } from "zustand";
import { createAuthSlice } from "./slices/authSlice";

export const useStore = create((set, get) => ({
  ...createAuthSlice(set),
}));

import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { initialUserStoreValues } from "./initialStoreValues";

export type UserStore = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  setUserId: (id: string) => void;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setCreatedAt: (createdAt: Date) => void;
  setUpdatedAt: (updatedAt: Date) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialUserStoreValues,
        setUserId: (id: string) => set({ id }),
        setName: (name: string) => set({ name }),
        setEmail: (email: string) => set({ email }),
        setCreatedAt: (createdAt: Date) => set({ createdAt }),
        setUpdatedAt: (updatedAt: Date) => set({ updatedAt }),
        clearUser: () => set({ ...initialUserStoreValues }),
      }),
      {
        name: "loggedInUserInformation",
      }
    )
  )
);

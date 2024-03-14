import { create } from "zustand";

export type NotificationState = {
  message: string;
  setMessage: (message: string) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useNotificationStore = create<NotificationState>((set) => ({
  message: "",
  isOpen: false,
  setMessage(message) {
    set({ message });
  },
  onOpen() {
    set(() => ({ isOpen: true }));
  },
  onClose() {
    set(() => ({ isOpen: false }));
  },
}));

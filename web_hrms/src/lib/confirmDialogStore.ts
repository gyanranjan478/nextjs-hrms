// lib/alertDialogStore.ts
import { create } from "zustand";

type ConfirmDialogStore = {
  open: boolean;
  message: string;
  onConfirm: (() => void) | null;
  openDialog: (message: string, onConfirm: () => void) => void;
  closeDialog: () => void;
};

export const useAlertDialogStore = create<ConfirmDialogStore>((set) => ({
  open: false,
  message: "",
  onConfirm: null,
  openDialog: (message, onConfirm) => set({ open: true, message, onConfirm }),
  closeDialog: () => set({ open: false, message: "", onConfirm: null }),
}));

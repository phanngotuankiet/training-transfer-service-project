import { create } from 'zustand';

interface FooterState {
  footerActive: boolean;
  offFooter: () => void;
  turnFooter: () => void;
  setFooter: (active: boolean) => void;
}

const useFooterStore = create<FooterState>((set) => ({
  footerActive: true,
  offFooter: () =>
    set((state) => {
      if (state.footerActive) {
        return { footerActive: false };
      }
      return state;
    }),
  turnFooter: () =>
    set((state) => {
      if (!state.footerActive) {
        return { footerActive: true };
      }
      return state;
    }),
  setFooter: (active: boolean) => set(() => ({ footerActive: active })),
}));

export default useFooterStore;

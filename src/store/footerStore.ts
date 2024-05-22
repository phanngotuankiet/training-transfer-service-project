import { create } from 'zustand';

interface FooterState {
  footerActive: boolean;
  offFooter: () => void;
  turnFooter: () => void;
  setFooter: (active: boolean) => void;
}

const useFooterStore = create<FooterState>((set) => ({
  footerActive: false,
  offFooter: () => set(() => ({ footerActive: false })),
  turnFooter: () => set(() => ({ footerActive: true })),
  setFooter: (active: boolean) => set(() => ({ footerActive: active })),
}));

export default useFooterStore;

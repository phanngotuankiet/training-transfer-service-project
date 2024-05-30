import { create } from 'zustand';

interface FooterState {
  footerActive: boolean;
  offFooter: () => void;
  turnFooter: () => void;
}

const useFooterStore = create<FooterState>((set) => ({
  footerActive: false,
  offFooter: () => set(() => ({ footerActive: false })),
  turnFooter: () => set(() => ({ footerActive: true })),
}));

export default useFooterStore;

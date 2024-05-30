import { create } from 'zustand';

interface SplashState {
  splashActive: boolean;
  offSpash: () => void;
  turnSpash: () => void;
}

const useSplashStore = create<SplashState>((set) => ({
  splashActive: false,
  offSpash: () => set(() => ({ splashActive: false })),
  turnSpash: () => set(() => ({ splashActive: true })),
}));

export default useSplashStore;

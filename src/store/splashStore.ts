import { create } from 'zustand';

interface SplashState {
  splashActive: boolean;
  offSplash: () => void;
  turnSplash: () => void;
  setSplash: (active: boolean) => void;
}

const useSplashStore = create<SplashState>((set) => ({
  splashActive: false,
  offSplash: () => set(() => ({ splashActive: false })),
  turnSplash: () => set(() => ({ splashActive: true })),
  setSplash: (active: boolean) => set(() => ({ splashActive: active })),
}));

export default useSplashStore;

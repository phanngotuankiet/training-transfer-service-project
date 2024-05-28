import { create } from 'zustand';

interface SplashState {
  splashActive: boolean
  offSpash: () => void
}

const useSplashStore = create<SplashState>((set) => ({
  splashActive: false,
  offSpash: () => set(() => ({ splashActive: true })),
}));

export default useSplashStore;

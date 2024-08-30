import { create } from 'zustand';

interface CityState {
  cityIdStore: string | null;
  updateCityId: (newCityId: string | null) => void;
}

const useCityStore = create<CityState>((set) => ({
  cityIdStore: null,
  updateCityId: (newCityId: string | null) =>
    set(() => ({
      cityIdStore: newCityId,
    })),
}));

export default useCityStore;

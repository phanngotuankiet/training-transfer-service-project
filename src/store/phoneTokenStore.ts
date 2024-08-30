import { create } from 'zustand';

interface PhoneTokenState {
  phoneToken: string | null;
  isLoadingPhoneGet: boolean;
  updatePhoneToken: (newPhoneToken: string | null) => void;
  resetPhoneToken: () => void;
  setIsloadingPhoneGet: (isLoading: boolean) => void;
}

const usePhoneTokenStore = create<PhoneTokenState>((set) => ({
  phoneToken: localStorage.getItem('phoneToken'),
  isLoadingPhoneGet: false,
  updatePhoneToken: (newPhoneToken: string | null) => {
    set(() => ({
      phoneToken: newPhoneToken,
    }));
    if (newPhoneToken) {
      localStorage.setItem('phoneToken', newPhoneToken);
    } else {
      localStorage.removeItem('phoneToken');
    }
  },
  resetPhoneToken: () => {
    set(() => ({
      phoneToken: null,
    }));
    localStorage.removeItem('phoneToken');
  },
  setIsloadingPhoneGet: (isLoading: boolean) => {
    set(() => ({
      isLoadingPhoneGet: isLoading,
    }));
  },
}));

export default usePhoneTokenStore;

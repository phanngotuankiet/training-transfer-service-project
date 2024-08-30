import { create } from 'zustand';

interface AuthState {
  token: string | null;
  zaloToken: string | null;
  userId: number | null;
  zaloId: string | null;
  name: string | null;
  orderId: string | null;
  setToken: (token: string | null) => void;
  setZaloToken: (zaloToken: string | null) => void;
  setUserId: (userId: number | null) => void;
  setZaloId: (zaloId: string | null) => void;
  setOrderId: (orderId: string | null) => void;
  setName: (name: string | null) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  zaloToken: null,
  userId: Number(localStorage.getItem('userId')),
  zaloId: localStorage.getItem('zaloId'),
  name: localStorage.getItem('name'),
  orderId: null,
  setToken: (token) =>
    set(() => ({
      token: token,
    })),
  setZaloToken: (zToken) =>
    set(() => ({
      zaloToken: zToken,
    })),
  setUserId: (userId) =>
    set(() => ({
      userId: userId,
    })),
  setZaloId: (zaloId) =>
    set(() => ({
      zaloId: zaloId,
    })),
  setName: (name) =>
    set(() => ({
      name: name,
    })),
  setOrderId: (orderId) =>
    set(() => ({
      orderId: orderId,
    })),
  clearAuth: () =>
    set(() => ({
      token: null,
      userId: null,
      zaloId: null,
      name: null,
      zaloToken: null
    })),
}));

export default useAuthStore;

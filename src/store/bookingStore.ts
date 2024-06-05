import { create } from 'zustand';

interface BookingCurrent {
  idItinerary: number | null;
  fromCity: string;
  endCity: string;
  timeStart: string;
  idvehicleType: number;
  vehicleType: string;
  idTripType: number;
  tripType: string;
  price: number;
  note: string;
}

interface BookingState {
  bookingCurrent: BookingCurrent | null;
  listItinerary: BookingCurrent[];
  updateBookingCurrent: (newBooking: BookingCurrent | null) => void;
  updateListItinerary: (newListBooking: BookingCurrent[]) => void;
  updateTimeStart: (time: string) => void;
  updateNote: (note: string) => void;
}

const useBookingStore = create<BookingState>((set) => ({
  bookingCurrent: null,
  listItinerary: [],
  updateBookingCurrent: (newBooking: BookingCurrent | null) =>
    set(() => ({
      bookingCurrent: newBooking,
    })),
  updateListItinerary: (newListItinerary: BookingCurrent[]) =>
    set((state) => ({
      listItinerary: newListItinerary,
    })),
  updateTimeStart: (time: string) =>
    set((state) => ({
      bookingCurrent: state.bookingCurrent
        ? { ...state.bookingCurrent, timeStart: time }
        : null,
    })),
  updateNote: (note: string) =>
    set((state) => ({
      bookingCurrent: state.bookingCurrent
        ? { ...state.bookingCurrent, note: note }
        : null,
    })),
}));

export default useBookingStore;

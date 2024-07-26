import React from 'react';
import { useBookingStore } from '../../../../store';

const listTripType = [
  { id: 1, name: 'Một Chiều' },
  { id: 2, name: 'Khứ Hồi' },
];

const TripType = () => {
  const { listItinerary, bookingCurrent, updateBookingCurrent } =
    useBookingStore();

  const handleClickTrip = (id: number) => {
    const newBooking = listItinerary.filter(
      (itinerary) =>
        id === itinerary?.idTripType &&
        itinerary.idvehicleType === bookingCurrent?.idvehicleType,
    )[0];

    if (newBooking) {
      updateBookingCurrent({
        ...newBooking,
        idvehicleType: bookingCurrent?.idvehicleType!,
        timeStart: bookingCurrent?.timeStart!,
        note: bookingCurrent?.note!,
      });
    }
  };

  const checkDisable = (id: number) => {
    const newBooking = listItinerary.filter(
      (itinerary) =>
        id === itinerary?.idTripType &&
        itinerary.idvehicleType === bookingCurrent?.idvehicleType,
    )[0];

    if (newBooking) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">Chọn chuyến đi</p>
      <div className="border-[1px] border-[#F5F5F5] inline-flex h-9 bg-[#F5F5F5] rounded-lg">
        {listTripType.map((trip) => {
          return (
            <button
              key={trip.id}
              className={`h-full relative rounded-lg w-28 flex items-center text-sm transition-all duration-300 ease-in-out justify-center ${bookingCurrent?.idTripType === trip.id ? 'bg-blue-500 text-white' : 'text-black'}`}
              onClick={() => handleClickTrip(trip.id)}
            >
              {trip.name}
              {checkDisable(trip.id) && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d3d3d399] rounded-lg"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TripType;

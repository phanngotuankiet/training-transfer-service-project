import React, { useState } from 'react';
import { Car4Slot, Car7Slot, Car16Slot } from '../../../../assets/svgs';
import { useBookingStore } from '../../../../store';

const listVehicleOPtion = [
  { id: 1, name: 'Xe 4 chỗ', icon: <Car4Slot /> },
  { id: 2, name: 'Xe 7 chỗ', icon: <Car7Slot /> },
  { id: 3, name: 'Xe 16 chỗ', icon: <Car16Slot /> },
];

const VehicleSelection = () => {
  const { listItinerary, bookingCurrent, updateBookingCurrent } =
    useBookingStore();

  const handleClickCar = (id: number) => {
    const newBooking = listItinerary.filter(
      (itinerary) =>
        id === itinerary?.idvehicleType &&
        itinerary.idTripType === bookingCurrent?.idTripType,
    )[0];

    if (newBooking) {
      updateBookingCurrent(newBooking);
    }
  };

  const checkDisable = (id: number) => {
    const newBooking = listItinerary.filter(
      (itinerary) =>
        id === itinerary?.idvehicleType &&
        itinerary.idTripType === bookingCurrent?.idTripType,
    )[0];

    if (newBooking) {
      return false;
    }

    return true;
  };

  return (
    <div>
      <p className="font-bold mt-5 mb-3 text-sm">Chọn xe</p>
      {/* List option */}
      <div className="flex gap-2">
        {listVehicleOPtion.map((vehicle, _) => {
          return (
            <button
              key={vehicle.id}
              className={`w-full relative flex flex-col items-center justify-center gap-2 p-4 border-[1px] border-[#AAB9C5] rounded-xl transition-all duration-300 ease-in-out transform ${bookingCurrent?.idvehicleType === vehicle.id ? 'bg-[#F1F7FF] shadow-lg' : ':bg-[#F1F7FF]'}`}
              onClick={() => handleClickCar(vehicle.id)}
            >
              {vehicle.icon}
              <p className="text-[#505050] text-sm">{vehicle.name}</p>
              {checkDisable(vehicle.id) && (
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#d3d3d399] rounded-lg"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleSelection;

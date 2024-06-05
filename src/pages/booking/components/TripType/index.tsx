import React, { useState } from 'react';

const listTripType = [
  { id: 1, name: 'Một Chiều' },
  { id: 2, name: 'Khứ Hồi' },
];

const TripType = () => {
  const [isActiveTrip, setIsActiveTrip] = useState(1);

  const handleClickTrip = (id: number) => {
    setIsActiveTrip(id);
  };

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">Chọn chuyến đi</p>
      <div className="border-[1px] border-[#F5F5F5] inline-flex h-14 bg-[#F5F5F5] rounded-lg">
        {listTripType.map((trip) => {
          return (
            <button
              key={trip.id}
              className={`h-ful rounded-lg w-36 flex items-center text-sm transition-all duration-300 ease-in-out justify-center ${isActiveTrip === trip.id ? 'bg-blue-500 text-white' : 'text-black'}`}
              onClick={() => handleClickTrip(trip.id)}
            >
              {trip.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TripType;

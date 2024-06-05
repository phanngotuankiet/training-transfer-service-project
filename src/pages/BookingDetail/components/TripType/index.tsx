import React, { useState, useEffect } from 'react';

const listTripType = [
  { id: 1, name: 'Một Chiều' },
  { id: 2, name: 'Khứ Hồi' },
];

const TripType = ({ option }) => {
  const [isActiveTrip, setIsActiveTrip] = useState(option);
  useEffect(() => {
    setIsActiveTrip(option);
  }, [option]);

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">Chọn chuyến đi</p>
      <div className="border-[1px] border-[#F5F5F5] inline-flex h-10 bg-[#F5F5F5] rounded-lg">
        {listTripType.map((trip, _) => {
          return (
            <button
              key={trip.id}
              className={`h-ful rounded-lg w-28 flex items-center transition-all duration-300 ease-in-out justify-center ${isActiveTrip === trip.id ? 'bg-blue-500 text-white' : 'text-black'}`}
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

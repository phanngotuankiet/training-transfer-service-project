import React from 'react';
import { LocationIcon } from '../../../assets/svgs';
import { useBookingStore } from '../../../store';

const DeparturePoint = () => {
  const { bookingCurrent } = useBookingStore();

  return (
    <div>
      <p className="font-bold text-sm">Điểm khởi hành</p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2 items-center rounded-lg bg-[#F1F7FF] p-3 w-full border-[1px] border-[#AAB9C5] text-sm">
          <div>
            <LocationIcon color="#196CEA" size={30} />
          </div>
          <p className="text-sm text-[#646464] font-medium">
            {bookingCurrent?.fromCity}
          </p>
        </div>
        <div className="flex gap-2 items-center rounded-lg bg-white p-3 w-full border-[1px] border-[#AAB9C5] text-sm">
          <div>
            <LocationIcon color="#196CEA" size={30} />
          </div>
          <p className="text-sm text-[#646464] font-medium">
            {bookingCurrent?.endCity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeparturePoint;

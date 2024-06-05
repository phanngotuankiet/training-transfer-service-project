import React from 'react';
import { LocationIcon } from '../../../assets/svgs';

const DeparturePoint = () => {
  return (
    <div>
      <p className="font-bold text-sm">Điểm khởi hành</p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2 items-center rounded-lg bg-[#F1F7FF] p-3 w-full border-[1px] border-[#AAB9C5] text-sm">
          <LocationIcon color="#196CEA" />
          <p>Ga Đà Nẵng</p>
        </div>
        <div className="flex gap-2 items-center rounded-lg bg-white p-3 w-full border-[1px] border-[#AAB9C5] text-sm">
          <LocationIcon color="#196CEA" />
          <p>Hội An</p>
        </div>
      </div>
    </div>
  );
};

export default DeparturePoint;

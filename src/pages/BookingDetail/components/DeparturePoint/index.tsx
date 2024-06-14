import React from 'react';
import { LocationIcon } from '../../../../assets/svgs';

const DeparturePoint = ({ startLocation, endLocation, status }) => {
  const showStatusHere = (
    <span
      className={`-translate-y-[2px] text-xs text-center ${status === 'Completed' ? 'bg-[#d18b21bd] text-white' : status === 'Confirmed' ? 'bg-[#024DFF] text-white' : status === 'Cancelled' ? 'bg-[#fcdcdb] text-[#DC1F18]' : 'bg-[#D0DEFF] text-[#006AF5]'} rounded-full px-2 py-1`}
    >
      {status === 'Completed'
        ? 'Đã hoàn thành'
        : status === 'Pending'
          ? 'Đang chờ xác nhận'
          : status === 'Cancelled'
            ? 'Đã huỷ'
            : status === 'Confirmed' && 'Đã xác nhận'}
    </span>
  );

  return (
    <div>
      <p className="font-bold text-sm flex space-x-2 items-center">
        <span>Điểm khởi hành</span> {showStatusHere}
      </p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2 rounded-lg bg-[#F1F7FF] p-3 w-full border-[1px] border-[#AAB9C5]">
          <LocationIcon color="#196CEA" />
          <p>{startLocation}</p>
        </div>
        <div className="flex gap-2 rounded-lg bg-white p-3 w-full border-[1px] border-[#AAB9C5]">
          <LocationIcon color="#196CEA" />
          <p>{endLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default DeparturePoint;

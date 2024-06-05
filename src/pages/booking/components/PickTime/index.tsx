import React, { useState } from 'react';
import { ClockSvg } from '../../../../assets/svgs';

const PickTime = () => {
  const [time, setTime] = useState(new Date().toISOString().slice(0, 16));

  const handleOnChangeTime = (value) => {
    setTime(value);
  };

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">Chọn thời gian đón</p>
      <div className="flex gap-2 border border-gray-300 rounded-lg w-full justify-start items-center">
        <div className="ps-3">
          <ClockSvg />
        </div>
        <input
          type="datetime-local"
          className="w-full d-block h-16 p-3 bg-white text-sm"
          defaultValue={time}
          onChange={(e) => {
            handleOnChangeTime(e.target.value);
          }}
        />
      </div>
      <p className="mt-2 text-[#686868] text-[12px]">
        *Thời gian đón 30 phút trước khi đi
      </p>
    </div>
  );
};

export default PickTime;

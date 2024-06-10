import React, { useState, useEffect } from 'react';
import { ClockSvg } from '../../../../assets/svgs';

interface IProps {
  dateTime: string;
  onChange: (value) => void;
  isDisabled: boolean;
}

const PickTime: React.FC<IProps> = ({ dateTime, onChange, isDisabled }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    if (dateTime) {
      const formattedDate = dateTime.split('+')[0];
      setTime(formattedDate);
    }
  }, [dateTime]);

  const handleOnChangeTime = (value) => {
    setTime(value);
  };

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">{isDisabled ? "Thời gian đón" : "Chọn thời gian đón"}</p>
      <div className="flex gap-2 border border-gray-300 rounded-lg w-full justify-start items-center">

        <div className="ps-3">
          <ClockSvg />
        </div>

        <input
          type="datetime-local"
          className="w-full d-block h-10 p-3 bg-white"
          value={time}
          onChange={(e) => {
            handleOnChangeTime(e.target.value);
            onChange(e.target.value);
          }}
          disabled={isDisabled}
        />

      </div>
      <p className="mt-2 text-[#686868] text-xs">
        *Thời gian đón 30 phút trước khi đi
      </p>
    </div>
  );
};

export default PickTime;

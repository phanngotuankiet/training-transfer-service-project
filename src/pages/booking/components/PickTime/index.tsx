import React, { useState, useEffect } from 'react';
import { ClockSvg } from '../../../../assets/svgs';
import { useBookingStore } from '../../../../store';
import { format, addMinutes } from 'date-fns';
// this component is unused
const PickTime = () => {
  const initialTime = addMinutes(new Date(), 20);
  const [time, setTime] = useState(format(initialTime, "yyyy-MM-dd'T'HH:mm"));

  const { updateTimeStart } = useBookingStore();

  const handleOnChangeTime = (value) => {
    updateTimeStart(value);
    setTime(value);
  };

  useEffect(() => {
    // biến time này thành bookingStore.timeStart ngay
    setTimeout(() => {
      updateTimeStart(time);
    }, 800);
  }, [time, updateTimeStart]);

  return (
    <div>
      <p className="font-bold text-sm mt-5 mb-3">Chọn thời gian đón</p>
      <div className="flex gap-2 border border-gray-300 rounded-lg w-full h-10 justify-start items-center">
        <div className="ps-3">
          <ClockSvg />
        </div>

        <input
          type="datetime-local"
          className="w-full d-block h-7 p-3 bg-white text-sm"
          defaultValue={time}
          onChange={(e) => {
            handleOnChangeTime(e.target.value);
          }}
        />

      </div>
      <p className="mt-2 text-[#686868] text-[12px]">
        *Thời gian đón 15 phút trước khi đi
      </p>
    </div>
  );
};

export default PickTime;

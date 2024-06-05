import React, { useState } from 'react';
import { useBookingStore } from '../../../../store';

const Note = () => {
  const { updateNote } = useBookingStore();
  const [value, setValue] = useState('');

  const handleChangeNote = (value: string) => {
    setValue(value);
    updateNote(value);
  };
  return (
    <div>
      <p className="mt-5 mb-3 font-bold text-sm">Ghi chú</p>
      <textarea
        onChange={(e) => {
          handleChangeNote(e.currentTarget.value);
        }}
        value={value}
        placeholder="Nhập ghi chú về địa điểm đón, số người,..."
        className="w-full min-h-[100px] rounded-xl border-[1px] border-[#AAB9C5] p-3 text-sm focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Note;

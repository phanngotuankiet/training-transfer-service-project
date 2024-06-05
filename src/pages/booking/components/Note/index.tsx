import React from 'react';

const Note = () => {
  return (
    <div>
      <p className="mt-5 mb-3 font-bold text-sm">Ghi chú</p>
      <textarea
        placeholder="Nhập ghi chú về địa điểm đón, số người,..."
        className="w-full min-h-32 rounded-xl border-[1px] border-[#AAB9C5] p-3 text-sm focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Note;

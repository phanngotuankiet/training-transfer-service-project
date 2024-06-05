import React from 'react';

const Summary = () => {
  return (
    <div className="px-4 w-full fixed bottom-0 left-0 right-0">
      <div className="flex w-full bg-blue-500 rounded-xl text-white text-lg font-bold">
        <p className="p-5 border-r-[1px] border-white text-[16px]">1,005K</p>
        <button className="w-full text-[15px]">Đặt xe</button>
      </div>
    </div>
  );
};

export default Summary;

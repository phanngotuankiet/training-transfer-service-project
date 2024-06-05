import React from 'react';
import DaNangImg from '../../../assets/images/danang.png';
import { LocationIcon, CarSvg } from '../../../assets/svgs';

const Banner = () => {
  return (
    <div className="mb-16">
      <div className="relative">
        <img
          src={DaNangImg}
          alt="Da Nang"
          className="h-36 w-full object-cover rounded-xl"
        />
        {/* banner service */}
        <div className="w-full p-3 absolute translate-y-14 bottom-0">
          <div className="bg-blue-500 p-3 rounded-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">
                  Ga Đà Nẵng
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">Hội An</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div>
                <CarSvg />
                <p className="text-white mt-2">Xe 4 chỗ</p>
              </div>
              <div className="h-10 w-[1px] bg-white"></div>
              <div className="flex justify-between flex-1">
                <div className="flex flex-col justify-between">
                  <p className="text-white">Khứ hồi</p>
                  <p className="text-white">Đón lúc: 5h00</p>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="text-white">Giá tiền</p>
                  <p className="text-white font-bold text-xl">1,005K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

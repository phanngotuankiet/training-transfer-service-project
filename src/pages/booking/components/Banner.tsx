import React from 'react';
import DaNangImg from '../../../assets/images/danang.png';
import { LocationIcon, CarSvg } from '../../../assets/svgs';
import { useBookingStore } from '../../../store';
import { formatCurrency } from '../../../utils/formatVND';

const Banner = () => {
  const { bookingCurrent } = useBookingStore();

  return (
    <div className="mb-16">
      <div className="relative">
        <img
          src={DaNangImg}
          alt="Da Nang"
          className="h-36 w-full object-cover rounded-xl"
        />
        <div className="w-full p-3 absolute translate-y-14 bottom-0">
          <div className="bg-blue-500 p-3 rounded-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">
                  {bookingCurrent?.fromCity}
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">
                  {bookingCurrent?.endCity}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div>
                <CarSvg />
                <p className="text-white mt-2">{bookingCurrent?.vehicleType}</p>
              </div>
              <div className="h-10 w-[1px] bg-white"></div>
              <div className="flex justify-between flex-1">
                <div className="flex flex-col justify-between">
                  <p className="text-white"> {bookingCurrent?.tripType}</p>
                  <p className="text-white">
                    Đón lúc: {bookingCurrent?.timeStart.split('T')[1]}
                  </p>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="text-white">Giá tiền</p>
                  <p className="text-white font-bold text-xl">
                    {formatCurrency(bookingCurrent?.price ?? 0)}
                  </p>
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

import React from 'react';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { Icon } from "zmp-ui";

interface BookingCardProps {
  from: string;
  to: string;
  price: string;
  status: string;
  typeOfCar: string;
  time: string;
  note: string;
  roundTrip: boolean;
}

const BookingCard: React.FC<BookingCardProps> = ({ from, to, price, status, typeOfCar, time, note, roundTrip }) => {
  return (
    <div className="shadow-lg bg-white rounded-lg p-4 mb-4">

      <div className="flex justify-between items-center mb-2">

        <div>
          <p className="text-[#929292] roboto text-sm font-medium">Chuyến đi</p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            <p className="font-bold">{from}</p>
          </div>

          <div className="h-3 border-l-2 border-[#B5D5FF] ml-1.5 my-1" />

          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            <p className="font-bold">{to}</p>
          </div>

        </div>

        <div className="text-right flex flex-col space-y-1">

          <p className="roboto leading-[22px] text-sm font-normal text-[#565656]">
            {roundTrip ? "Khứ hồi" : "Một chiều"}
          </p>

          <p className="text-blue-600 font-bold text-xl leading-6 poppins">
            {price}
          </p>

          <span className={`text-xs ${status === 'Sắp đến' ? 'bg-blue-600 text-white ' : 'bg-[#D0DEFF] text-[#016BF5]'} rounded-full px-2 py-1`}>
            {status === "Completed" ? "Đã hoàn thành" : status}
          </span>

        </div>

      </div>

      <hr className="my-2 border-gray-300" />

      <div className="flex justify-between">
        <div className="mb-2">
          <p className="text-black poppins font-medium text-sm leading-6">
            {typeOfCar}
          </p>

          <p className="roboto leading-[22px] text-sm text-[#565656]">{roundTrip ? "Khứ hồi" : "Một chiều"}</p>
        </div>

        <div className="mt-[2px] flex-col space-y-1">
          <p className="text-[#7991A4] roboto font-normal leading-5">Giờ đón</p>
          <p className="leading-5 font-normal roboto text-black text-sm">{time}</p>
        </div>
      </div>

      <div className="bg-[#F5F5F5] p-2 rounded-lg">

        <div className="text-[#7991A4] roboto font-normal leading-5 text-[14px] flex justify-between">

          <p>Ghi chú</p>

          {status !== "Completed" && <Icon icon="zi-edit-text" className="text-black" />}

        </div>

        <p className="mb-5 roboto font-normal leading-5">{note}
        </p>
      </div>

      {status !== "Completed" && <div className="flex justify-between items-center mt-2">
        <button className="text-[#006AF5] flex items-center space-x-2">
          <Icon icon="zi-call" />
          <p className="text-[15px] leading-5 roboto">Liên hệ tổng đài</p>
        </button>

        <button className="text-red-600 flex items-center space-x-1">
          <FaTimes />
          <p className="roboto text-[14px] font-normal">Hủy đặt</p>
        </button>
      </div>}

    </div>
  );
};

export default BookingCard;
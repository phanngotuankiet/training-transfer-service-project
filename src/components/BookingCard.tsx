import React from 'react';
import { FaPhoneAlt, FaTimes, FaMapMarkerAlt } from 'react-icons/fa'; // Import biểu tượng từ react-icons

interface BookingCardProps {
  from: string;
  to: string;
  price: string;
  status: string;
  time: string;
  note: string;
}

const BookingCard: React.FC<BookingCardProps> = ({ from, to, price, status, time, note }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-gray-500">Chuyến đi</p>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            <p className="font-bold">{from}</p>
          </div>
          <div className="h-6 border-l-2 border-blue-600  ml-1.5"></div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            <p className="font-bold">{to}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-blue-600 font-bold">{price}</p>
          <span className={`text-xs ${status === 'Sắp đến' ? 'bg-blue-600 text-white ' : 'bg-gray-100 text-gray-600'} rounded-full px-2 py-1`}>{status}</span>
        </div>
      </div>
      <hr className="my-2 border-gray-300" />
      <div className="mb-2">
        <p className="text-gray-500">Xe 4 chỗ</p>
        <p className="text-gray-500">Giờ đón</p>
        <p className="font-bold">{time}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-500">Ghi chú</p>
        <p className="bg-gray-100 p-2 rounded">{note}</p>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-blue-600 flex items-center">
          <FaPhoneAlt className="mr-1" /> Liên hệ tổng đài
        </button>
        <button className="text-red-600 flex items-center">
          <FaTimes className="mr-1" /> Hủy đặt
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
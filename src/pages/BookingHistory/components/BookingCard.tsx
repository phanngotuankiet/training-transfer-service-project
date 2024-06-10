import React, { useState, useEffect } from 'react';
import { useNavigate, Icon } from 'zmp-ui';
import { FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import CancellationNotice from '../../BookingDetail/components/CancellationNotice';
import screenUrl from '../../../constants/screenUrl';
import { formatDateTime } from '../../BookingDetail/components/FormatDateTime';
import { openPhone } from 'zmp-sdk';

interface BookingCardProps {
  id: number;
  startLocation: string;
  endLocation: string;
  option: string;
  price: number;
  status: string;
  vehicleType: string;
  dateTime: string;
  note: string;
  fetchData: () => void;
}

const BookingCard: React.FC<BookingCardProps> = ({
  id,
  startLocation,
  endLocation,
  option,
  price,
  status,
  vehicleType,
  dateTime,
  note,
  fetchData,
}) => {
  const navigate = useNavigate();
  const [time, setTime] = useState('');
  const [isCancellationNoticeVisible, setIsCancellationNoticeVisible] =
    useState(false);

  const handleCallAdmin = () => {
    openPhone({
      phoneNumber: '0366636600',
    });
  };

  const handleClick = () => {
    navigate(`${screenUrl.bookingDetail}?bookingId=${id}`);
  };

  useEffect(() => {
    if (dateTime) {
      const formattedDate = formatDateTime(dateTime);
      setTime(formattedDate);
    }
  }, [dateTime]);

  return (
    <div className="shadow-lg bg-white rounded-lg p-4 mb-4">
      <button className="w-full text-left" onClick={handleClick}>
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-[#929292] roboto text-sm font-medium">
              Chuyến đi
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <p className="font-bold">{startLocation}</p>
            </div>

            <div className="h-3 border-l-2 border-[#B5D5FF] ml-1.5 my-1" />

            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              <p className="font-bold">{endLocation}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-1 items-end">
            <p className="roboto leading-[22px] text-sm font-normal text-[#565656]">
              {option ? 'Khứ hồi' : 'Một chiều'}
            </p>

            <p className="text-[#016BF5] font-bold text-xl leading-6 poppins">
              {price
                ? price.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                })
                : ''}
            </p>

            <span
              className={`text-xs text-center ${status === 'Completed' ? 'bg-[#d18b21bd] text-white' : status === 'Confirmed' ? 'bg-[#024DFF] text-white' : status === 'Cancelled' ? 'bg-[#fcdcdb] text-[#DC1F18]' : 'bg-[#D0DEFF] text-[#006AF5]'} rounded-full px-2 py-1`}
            >
              {status === 'Completed' ? 'Đã hoàn thành' : status === 'Pending' ? 'Đang chờ xác nhận' : status === 'Cancelled' ? 'Đã huỷ' : status === 'Confirmed' && 'Đang tới'}
            </span>
          </div>
        </div>

        <hr className="my-2 border-gray-300" />

        <div className="flex justify-between">
          <div className="mb-2">
            <p className="text-black poppins font-medium text-sm leading-6">
              {vehicleType}
            </p>

            <p className="roboto leading-[22px] text-sm text-[#565656]">
              {option}
            </p>
          </div>

          <div className="mt-[2px] flex-col space-y-1">
            <p className="text-[#7991A4] roboto font-normal leading-5">
              Giờ đón
            </p>
            <p className="leading-5 font-normal roboto text-black text-sm">
              {time}
            </p>
          </div>
        </div>

        <div className="bg-[#F5F5F5] p-2 rounded-lg">
          <div className="text-[#7991A4] roboto font-normal leading-5 text-[14px] flex justify-between">
            <p>Ghi chú</p>

            {status !== 'Cancelled' && status !== 'Completed' && (
              <Icon icon="zi-edit-text" className="text-black" />
            )}
          </div>

          <p className="mb-5 roboto font-normal leading-5">{note}</p>
        </div>
      </button>
      {status === 'Pending' && (
        <div className="flex justify-between items-center mt-2">
          <button
            className="text-[#006AF5] flex items-center space-x-2"
            onClick={handleCallAdmin}
          >
            <Icon icon="zi-call" />
            <p className="text-[15px] leading-5 roboto">Liên hệ tổng đài</p>
          </button>

          <button
            onClick={() => setIsCancellationNoticeVisible(true)}
            className="text-red-600 flex items-center space-x-1"
          >
            <FaTimes />
            <p className="roboto text-[14px] font-normal">Hủy đặt</p>
          </button>
        </div>
      )}
      <CancellationNotice
        id={id}
        show={isCancellationNoticeVisible}
        onClose={() => setIsCancellationNoticeVisible(false)}
        fetchDataHistory={fetchData}
      />
    </div>
  );
};

export default BookingCard;

import React, { useEffect, useState } from 'react';
import { useBookingStore, useFooterStore } from '../../../../store';
import { formatCurrency } from '../../../../utils/formatVND';
import { useInsertBookingMutation } from '../../../../generated/graphql';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import screenUrl from '../../../../constants/screenUrl';
import { PulseLoader } from 'react-spinners';
import ConvertVietnamTimeToUTC from '../../../../components/ConvertVietnamTimeToUTC';
import { isGreaterThanOrEquals15Minutes } from '../../../../functions/isGreaterThanOrEquals15Minutes';

const Summary = () => {
  const { turnFooter } = useFooterStore();
  const { bookingCurrent } = useBookingStore();
  const [isSubmit, setIsSubmit] = useState(false);
  const [insertBookingMutation] = useInsertBookingMutation({
    fetchPolicy: 'no-cache',
  });
  const navigate = useNavigate();

  const handleBooking = async () => {
    setIsSubmit(true);
    try {
      const timeNow = new Date();
      const timeNow1 = ConvertVietnamTimeToUTC(timeNow);

      const timeUserPicked = ConvertVietnamTimeToUTC(bookingCurrent?.timeStart);

      const verifyMinimumMinutes = isGreaterThanOrEquals15Minutes(timeNow1, timeUserPicked);

      if (verifyMinimumMinutes) {
        if (bookingCurrent) {
          const result = await insertBookingMutation({
            variables: {
              bookingDate: ConvertVietnamTimeToUTC(bookingCurrent.timeStart),
              itineraryId: bookingCurrent.idItinerary!,
              userId: parseInt(localStorage.getItem('userId')!),
              note: bookingCurrent.note,
            },
          });
          if (result.data?.actionInsertBooking) {
            toast.success('Bạn đã đặt chuyến đi thành công');
          }

          turnFooter();
          navigate(screenUrl.history);
        }
      } else {
        toast('Bạn chọn thời gian đón cách hiện tại ít nhất 15 phút.', {
          position: "top-center", className: 'toast-message'
        });
      }
    } catch (error) {
      console.log(error);
    }
    setIsSubmit(false);
  };

  return (
    <div className="px-4 w-full fixed bottom-0 left-0 right-0 -translate-y-3">
      <div className="flex w-full bg-blue-500 rounded-xl text-white text-lg font-bold">
        <p className="p-5 border-r-[1px] border-white text-[16px]">
          {formatCurrency(bookingCurrent?.price ?? 0)}
        </p>
        <button
          disabled={isSubmit}
          className="w-full relative text-[15px] bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-100 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={handleBooking}
        >
          {isSubmit && (
            <div className="absolute left-1/2 top1/2 -translate-x-1/2 -translate-y-1/2">
              <PulseLoader color="#ffffff" size={9} />
            </div>
          )}
          {!isSubmit && ' Đặt xe'}
        </button>
      </div>
    </div>
  );
};

export default Summary;

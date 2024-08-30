import React, { useEffect, useState } from 'react';
import { useBookingStore, useFooterStore } from '../../../../store';
import { formatCurrency } from '../../../../utils/formatVND';
import { useInsertBookingAfterCheckoutPopupMutation, useConfirmPaymentStatusTrueSubscription } from '../../../../generated/graphql';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import screenUrl from '../../../../constants/screenUrl';
import { PulseLoader } from 'react-spinners';
import ConvertVietnamTimeToUTC from '../../../../components/ConvertVietnamTimeToUTC';
import { isGreaterThanOrEquals15Minutes } from '../../../../functions/isGreaterThanOrEquals15Minutes';
import useLogin from '../../../../hooks/useLogin';
import useAuthStore from '../../../../store/authStore';
import useGetPhone from '../../../../hooks/useGetPhone';
import usePhoneTokenStore from '../../../../store/phoneTokenStore';
import usePay from '../../../../utils/pay';

const Summary = () => {
  const { turnFooter } = useFooterStore();
  const { bookingCurrent } = useBookingStore();
  const { handleClickActivelyLogin } = useLogin();
  const { userId, token, orderId, setOrderId } = useAuthStore();
  const { phoneToken, isLoadingPhoneGet, setIsloadingPhoneGet } = usePhoneTokenStore();
  const [fetchPhone, setFetchPhone] = useState(false);
  const [statusAcceptLogin, setStatusAcceptLogin] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const [insertBookingAfterCheckoutPopup] = useInsertBookingAfterCheckoutPopupMutation({});
  const { data } = useConfirmPaymentStatusTrueSubscription({
    variables: {
      _eq: orderId
    },
    fetchPolicy: "no-cache"
  });
  const confirmPaymentStatusTrue = data?.bookings[0]?.payment_status || null;


  useEffect(() => {
    if (confirmPaymentStatusTrue) {
      turnFooter();
      navigate(screenUrl.history);

      toast.success('Bạn đã đặt chuyến đi thành công');
    }
  }, [confirmPaymentStatusTrue]);


  const navigate = useNavigate();
  const { pay } = usePay();

  const handleLoginClick = async () => {
    const resultLogin = await handleClickActivelyLogin();

    setStatusAcceptLogin(resultLogin);
  }

  // lấy phone num từ zalo
  useGetPhone(fetchPhone);

  const handlePayment = async () => {
    try {
      const timeNow = new Date();
      const utcTimeNow = ConvertVietnamTimeToUTC(timeNow);
      const timeUserPicked = ConvertVietnamTimeToUTC(bookingCurrent?.timeStart);

      const verifyMinimumMinutes = isGreaterThanOrEquals15Minutes(
        utcTimeNow,
        timeUserPicked,
      );
      // Handle successful payment (e.g., navigate to a success page)

      if (verifyMinimumMinutes) {
        if (bookingCurrent) {

          const paymentData = {
            id: bookingCurrent?.idItinerary, // id of the trip
            amount: bookingCurrent?.price, // price of the trip
          };

          const resultOrderZaloId = await pay(paymentData, `${bookingCurrent?.fromCity} - ${bookingCurrent?.endCity}`);

          console.log('Đã hiện lên modal pay.ts (from Summary):', resultOrderZaloId);

          if (resultOrderZaloId) {
            try {
              await insertBookingAfterCheckoutPopup({
                variables: {
                  objects: {
                    zalo_order_id: resultOrderZaloId as string,
                    payment_status: false,
                    user_id: userId,
                    itinerary_id: bookingCurrent?.idItinerary,
                    note: bookingCurrent?.note,
                    booking_date: ConvertVietnamTimeToUTC(bookingCurrent.timeStart),
                    status: "Pending",
                    created_at: utcTimeNow
                  }
                },
              });

            } catch (error) {
              console.log("error", error.message);
            }
          }

        }
      } else {
        toast('Bạn chọn thời gian đón cách hiện tại ít nhất 15 phút.', {
          position: 'top-center',
          className: 'toast-message poppins-bold',
        });
      }


    } catch (error) {

      console.error('Payment failed:', error);

    }
  };

  const handleBooking = async () => {
    // kiểm tra coi thử login chưa, nếu chưa thì chạy hàm useLogin()
    if (!token) {
      setIsSubmit(true);

      await handleLoginClick();
    }

    // nếu chưa cung cấp phone number mà đã login rồi
    else if (token && !phoneToken) {
      setIsSubmit(true);

      setFetchPhone(true);
    }

    else if (token && phoneToken) {
      setIsSubmit(true);

      await handlePayment();

      // datXeButton();
    }
  };

  useEffect(() => {

    if (phoneToken && token) {
      setTimeout(() => {
        setIsSubmit(false);
      }, 3000);
    }

    setTimeout(() => {
      // cái này là sau khi user từ chối cung cấp phone sau xx giây thì nó mới bật nút 'Đặt xe' trở lại

      if (fetchPhone) {
        setFetchPhone(false);
      }
    }, 2400);

    if (statusAcceptLogin) {
      setIsSubmit(false);

      setFetchPhone(true);

      setTimeout(() => {
        setStatusAcceptLogin(false);
      }, 400);
    }

    if (isLoadingPhoneGet) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }

    setTimeout(() => {
      // cấm cho nút xoay quá lâu
      if (isLoadingPhoneGet) {
        setIsloadingPhoneGet(false);
      }
    }, 3000);

    return () => {
      setOrderId(null);
    };
  }, [token, phoneToken, isSubmit, statusAcceptLogin, isLoadingPhoneGet, fetchPhone]);

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

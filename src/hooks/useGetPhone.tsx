import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getPhoneNumber } from "zmp-sdk/apis";
import ConvertVietnamTimeToUTC from "../components/ConvertVietnamTimeToUTC";
import { isGreaterThanOrEquals15Minutes } from "../functions/isGreaterThanOrEquals15Minutes";
import { useConfirmPaymentStatusTrueSubscription, useInsertBookingAfterCheckoutPopupMutation, useSavePhoneNumberMutation } from "../generated/graphql";
import { useBookingStore, useFooterStore } from "../store";
import useAuthStore from "../store/authStore";
import usePhoneTokenStore from "../store/phoneTokenStore";
import usePay from "../utils/pay";

const useGetPhone = (shouldFetchPhone: boolean) => {
  const { token, zaloId, userId, zaloToken, orderId } = useAuthStore();
  const getToken = token;
  const { updatePhoneToken, setIsloadingPhoneGet } = usePhoneTokenStore();
  const [savePhoneNumberMutation] = useSavePhoneNumberMutation();
  const { bookingCurrent } = useBookingStore();
  const [insertBookingAfterCheckoutPopup] = useInsertBookingAfterCheckoutPopupMutation({});
  const { turnFooter } = useFooterStore();
  const navigate = useNavigate();

  const { pay } = usePay();

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
      navigate('/history');

      // toast.success('Bạn đã đặt chuyến đi thành công');
    }
  }, [confirmPaymentStatusTrue]);

  const handlePayment = async () => {
    console.log("đã vào!!!");
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

          console.log('Đã hiện lên modal pay.ts:', resultOrderZaloId);

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


  useEffect(() => {

    const getPhoneToken = async () => {
      if (getToken && shouldFetchPhone) {

        await getPhoneNumber({
          success: async (data) => {
            setIsloadingPhoneGet(true);

            const { token } = data;

            // lưu xuống global state
            updatePhoneToken(token!);

            localStorage.setItem("phoneToken", token!);


            if (token) {

              const getPhone = await savePhoneNumberMutation({
                variables: {
                  accessToken: zaloToken!,
                  phoneToken: token,
                  zaloId: zaloId!,
                }
              });

              console.log("ket qua", getPhone);

              await handlePayment();
            }
          },
          fail: (err) => {
            setIsloadingPhoneGet(false);
          },
        });
      }
    };

    getPhoneToken();
  }, [token, shouldFetchPhone]);
};

export default useGetPhone;

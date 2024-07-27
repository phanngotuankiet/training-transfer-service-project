import React, { useState, useEffect } from 'react';
import { Page } from 'zmp-ui';
import Banner from './components/Banner';
import CancellationNotice from './components/CancellationNotice';
import DeparturePoint from './components/DeparturePoint';
import PickTime from './components/PickTime';
import TripType from './components/TripType';
import Note from './components/Note';
import Button from './components/Button';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import {
  useGetBookingQuery,
  useMutationUpdateBookingMutation,
} from '../../generated/graphql';
import { openPhone } from 'zmp-sdk/apis';
import TopNavBar from '../../components/layout/TopNavBar';
import { useFooterStore } from '../../store';
import ConvertVietnamTimeToUTC from '../../components/ConvertVietnamTimeToUTC';
import { isGreaterThanOrEquals15Minutes } from '../../functions/isGreaterThanOrEquals15Minutes';
import { toast } from 'react-toastify';
import { BarLoader } from 'react-spinners';

const BookingDetail = ({ bookingId, phoneNumber, onCancel }) => {
  const { offFooter } = useFooterStore();

  const [isCancellationNoticeVisible, setIsCancellationNoticeVisible] =
    useState(false);

  const { data, refetch } = useGetBookingQuery({
    variables: { id: parseInt(bookingId) },
    fetchPolicy: 'no-cache',
  });

  const reFetchData = () => {
    refetch();
  };

  const dataBooking = data?.bookings_by_pk?.itinerary;

  const [dateTime, setDateTime] = useState('');
  const [note, setNote] = useState('');

  const [updateBooking] = useMutationUpdateBookingMutation({
    fetchPolicy: 'no-cache',
  });

  const handleCallAdmin = () => {
    openPhone({
      phoneNumber: phoneNumber,
    });
  };

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      // nút back giờ làm vai trò cancel cho modal
      onCancel();

      // Đẩy trạng thái mới để ngăn điều hướng
      window.history.pushState(null, null, window.location.pathname);
    };

    // Lắng nghe sự kiện "popstate" của window để bắt sự kiện "Back"
    const handlePopState = (event) => {
      handleBackButton(event);
    };

    // Đẩy trạng thái mới vào lịch sử để ngăn chặn điều hướng
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    // Cleanup listener khi component unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleUpdateBooking = async () => {
    try {
      // time lúc người dùng đang bấm nút Lưu thông tin
      const timeNow = new Date().toISOString();
      const yesAuthenticate = isGreaterThanOrEquals15Minutes(timeNow, dateTime);

      if (yesAuthenticate) {
        await updateBooking({
          variables: {
            id: parseInt(bookingId),
            bookingDate: ConvertVietnamTimeToUTC(dateTime),
            note: note,
          },
        });

        onCancel();

        toast.success('Cập nhật thành công!', {
          position: 'top-center',
        });
      } else {
        // hiện toast tại đây
        toast('Bạn chọn thời gian đón cách hiện tại ít nhất 15 phút.', {
          position: 'top-center',
          className: 'toast-message',
        });
      }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại', {
        position: 'top-center',
      });
    }
  };

  const dateTimeString = data?.bookings_by_pk?.booking_date;
  const dateObject = new Date(dateTimeString);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const bookingDate = ` ${hours}:${minutes}`;

  useEffect(() => {
    setDateTime(data?.bookings_by_pk?.booking_date);
    setNote(data?.bookings_by_pk?.note!);
  }, [dataBooking]);

  useEffect(() => {
    offFooter();
  }, []);

  const handleOnChangeTime = (value) => {
    setDateTime(value);
  };
  const handleOnChangeNoteText = (value) => {
    setNote(value);
  };

  return (
    <Page className="page p-2 fixed bg-white z-10">
      {!data ? (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <BarLoader color="#006AF5" />
        </div>
      ) : (
        <div>
          <TopNavBar title={'Đặt chuyến đi sắp đến'} cancel={onCancel} />

          <Banner
            startLocation={
              dataBooking?.route.city.routes[0].startlocation?.name
            }
            endLocation={dataBooking?.route.city.routes[0].endlocation?.name}
            car={dataBooking?.vehicle_type.type}
            option={dataBooking?.option.round_type}
            price={dataBooking?.price}
            bookingDate={bookingDate}
          />

          <DeparturePoint
            startLocation={
              dataBooking?.route.city.routes[0].startlocation?.name
            }
            endLocation={dataBooking?.route.city.routes[0].endlocation?.name}
            status={data?.bookings_by_pk?.status}
          />

          <TripType
            option={dataBooking?.option.id}
            title={
              data?.bookings_by_pk?.status === 'Completed' ||
              data?.bookings_by_pk?.status === 'Cancelled' ||
              data?.bookings_by_pk?.status === 'Confirmed'
                ? true
                : false
            }
          />

          <PickTime
            dateTime={data?.bookings_by_pk?.booking_date}
            onChange={handleOnChangeTime}
            isDisabled={
              data?.bookings_by_pk?.status === 'Completed' ||
              data?.bookings_by_pk?.status === 'Cancelled' ||
              data?.bookings_by_pk?.status === 'Confirmed'
                ? true
                : false
            }
          />

          <Note
            note={data?.bookings_by_pk?.note}
            onChange={handleOnChangeNoteText}
            isDisabled={
              data?.bookings_by_pk?.status === 'Cancelled' ||
              data?.bookings_by_pk?.status === 'Completed' ||
              data?.bookings_by_pk?.status === 'Confirmed'
                ? true
                : false
            }
          />

          {data?.bookings_by_pk?.status != 'Cancelled' &&
            data?.bookings_by_pk?.status != 'Completed' && (
              <>
                <div className="flex justify-between items-center px-4 pt-3">
                  <button
                    className="text-blue-600 flex items-center"
                    onClick={handleCallAdmin}
                  >
                    <FaPhoneAlt className="mr-1" /> Liên hệ tổng đài
                  </button>

                  <button
                    onClick={() => setIsCancellationNoticeVisible(true)}
                    className="text-red-600 flex items-center"
                  >
                    <FaTimes className="mr-1" /> Hủy đặt
                  </button>
                </div>
                <Button onClick={handleUpdateBooking} onCancel={onCancel} />
              </>
            )}

          <CancellationNotice
            id={parseInt(bookingId)}
            show={isCancellationNoticeVisible}
            onClose={() => {
              setIsCancellationNoticeVisible(false), reFetchData();
            }}
          />
        </div>
      )}
    </Page>
  );
};

export default BookingDetail;

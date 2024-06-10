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
import { getRouteParams, openPhone } from 'zmp-sdk/apis';
import { useNavigate } from 'react-router';
import TopNavBar from '../../components/layout/TopNavBar';
import { formatDateTime } from './components/FormatDateTime';
import { useFooterStore } from '../../store';
import ConvertVietnamTimeToUTC from '../../components/ConvertVietnamTimeToUTC';
import { isGreaterThanOrEquals15Minutes } from '../../functions/isGreaterThanOrEquals15Minutes';
import { toast } from 'react-toastify';

const BookingDetail = () => {
  const { offFooter } = useFooterStore();

  const [isCancellationNoticeVisible, setIsCancellationNoticeVisible] =
    useState(false);

  const navigate = useNavigate();

  const { bookingId } = getRouteParams();

  const { data } = useGetBookingQuery({
    variables: { id: parseInt(bookingId) },
    fetchPolicy: 'no-cache',
  });

  const dataBooking = data?.bookings_by_pk?.itinerary;

  const [dateTime, setDateTime] = useState('');
  const [note, setNote] = useState('');

  const [updateBooking] = useMutationUpdateBookingMutation({
    fetchPolicy: 'no-cache',
  });

  const handleCallAdmin = () => {
    openPhone({
      phoneNumber: '0366636600',
    });
  };

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

        navigate('/history');

        toast.success('Cập nhật thành công!', {
          position: 'top-center',
        });
      } else {
        // hiện toast tại đây
        toast('Bạn chọn thời gian đón cách hiện tại ít nhất 15 phút.', {
          position: "top-center", className: 'toast-message'
        });
      }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại', {
        position: 'top-center',
      });
    }
  };

  const handleOnChangeTime = (value) => {
    setDateTime(value);
  };
  const handleOnChangeNoteText = (value) => {
    setNote(value);
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

  return (
    <Page className="page p-2">
      <TopNavBar title={'Đặt chuyến đi sắp đến'} />

      <Banner
        startLocation={dataBooking?.route.city.routes[0].startlocation?.name}
        endLocation={dataBooking?.route.city.routes[0].endlocation?.name}
        car={dataBooking?.vehicle_type.type}
        option={dataBooking?.option.round_type}
        price={dataBooking?.price}
        bookingDate={bookingDate}
      />

      <DeparturePoint
        startLocation={dataBooking?.route.city.routes[0].startlocation?.name}
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

      {data?.bookings_by_pk?.status === 'Pending' && (
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
          <Button onClick={handleUpdateBooking} />
        </>
      )}

      <CancellationNotice
        id={parseInt(bookingId)}
        show={isCancellationNoticeVisible}
        onClose={() => setIsCancellationNoticeVisible(false)}
      />
    </Page>
  );
};

export default BookingDetail;

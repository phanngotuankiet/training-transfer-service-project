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
      await updateBooking({
        variables: {
          id: parseInt(bookingId),
          bookingDate: dateTime,
          note: note,
        },
      });
      navigate('/history');
    } catch (error) {
      console.error('Lỗi khi hủy chuyến:', error);
    }
  };

  const handleOnChangeTime = (value) => {
    setDateTime(value);
  };
  const handleOnChangeNoteText = (value) => {
    setNote(value);
  };

  const dateTimeString = formatDateTime(
    data?.bookings_by_pk?.booking_date,
  ).split('|')[0];

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
        bookingDate={dateTimeString}
      />
      <DeparturePoint
        startLocation={dataBooking?.route.city.routes[0].startlocation?.name}
        endLocation={dataBooking?.route.city.routes[0].endlocation?.name}
      />
      <TripType option={dataBooking?.option.id} />
      <PickTime
        dateTime={data?.bookings_by_pk?.booking_date}
        onChange={handleOnChangeTime}
      />
      <Note
        note={data?.bookings_by_pk?.note}
        onChange={handleOnChangeNoteText}
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

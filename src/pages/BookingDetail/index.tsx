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
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import TopNavBar from '../../components/layout/TopNavBar';
import ConvertVietnamTimeToUTC from './ConvertVietnamTimeToUTC';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toastStyles.css';

const BookingDetail = () => {
  const [isCancellationNoticeVisible, setIsCancellationNoticeVisible] =
    useState(false);
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const { data } = useGetBookingQuery({
    variables: { id: 1 },
    fetchPolicy: 'no-cache',
  });
  const dataBooking = data?.bookings_by_pk?.itinerary;

  const [dateTime, setDateTime] = useState('');
  const [note, setNote] = useState('');
  useEffect(() => {
    setDateTime(data?.bookings_by_pk?.booking_date);
    setNote(data?.bookings_by_pk?.note);
  }, [dataBooking]);
  const [updateBooking] = useMutationUpdateBookingMutation({
    fetchPolicy: 'no-cache',
  });
  const handleUpdateBooking = async () => {
    try {
      await updateBooking({
        variables: { id: 1, bookingDate: dateTime, note: note },
      });
      toast.success('Cập nhật thành công!');
      navigate('/history');
    } catch (error) {
      toast.error('Cập nhật thất bại!');
      console.error('Lỗi khi hủy chuyến:', error);
    }
  };

  const handleOnChangeTime = (value) => {
    const utcDateString = ConvertVietnamTimeToUTC(value);
    setDateTime(utcDateString);
  };
  const handleOnChangeNoteText = (value) => {
    setNote(value);
  };

  const dateTimeString = data?.bookings_by_pk?.booking_date;
  // Định dạng ngày giờ theo kiểu Việt Nam
  const dateObject = new Date(dateTimeString);
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const bookingDate = ` ${hours}:${minutes}`;

  return (
    <Page className="page p-2">
      <ToastContainer autoClose={500} />
      <TopNavBar title={'Đặt chuyến đi sắp đến'} footerActive={false} />
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
      <div className="flex justify-between items-center px-4 pt-3">
        <button className="text-blue-600 flex items-center">
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
      <CancellationNotice
        show={isCancellationNoticeVisible}
        onClose={() => setIsCancellationNoticeVisible(false)}
      />
    </Page>
  );
};

export default BookingDetail;

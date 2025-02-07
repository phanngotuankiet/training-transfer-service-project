import React, { useEffect, useState } from 'react';
import BookingCard from './components/BookingCard';
import { useQueryBookingsQuery } from '../../generated/graphql';
import Header from './components/Header';
import { useFooterStore } from '../../store';
import { BookingDetail } from '..';
import useAuthStore from '../../store/authStore';
import useLogout from '../../hooks/useLogout';

const BookingHistoryPage = () => {
  const { turnFooter, offFooter } = useFooterStore();
  const { userId } = useAuthStore();
  const logout = useLogout();

  const [openBookingDetail, setOpenBookingDetail] = useState(false);
  const [idToOpen, setIdToOpen] = useState({ id: 0, phoneNumber: 0 });

  const { data, refetch } = useQueryBookingsQuery({
    variables: {
      where: {
        user_id: {
          _eq: userId,
        },
        payment_status: {
          _eq: true
        }
      },
    },
    fetchPolicy: "no-cache"
  });

  const fetchData = () => {
    refetch();
  };

  useEffect(() => {
    turnFooter();

    return () => {
      logout();
    };
  }, []);

  useEffect(() => {
    if (openBookingDetail) {
      offFooter(); // Turn off footer when modal is open
    } else {
      turnFooter(); // Turn footer back on when modal is closed
    }
  }, [openBookingDetail, offFooter, turnFooter]);

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {openBookingDetail && (
        <BookingDetail
          bookingId={idToOpen.id}
          phoneNumber={idToOpen.phoneNumber}
          onCancel={() => {
            setOpenBookingDetail(false), fetchData();
          }}
        />
      )}

      <div>
        <Header />

        <div className="p-4">
          {data?.bookings.map((booking, index) => (
            <BookingCard
              key={index}
              startLocation={booking.itinerary.route.startlocation.name}
              endLocation={booking.itinerary.route.endlocation.name}
              option={booking.itinerary.option.round_type}
              price={booking.itinerary.price}
              status={booking.status}
              vehicleType={booking.itinerary.vehicle_type.type}
              dateTime={booking?.booking_date}
              note={booking?.note ?? ' '}
              id={booking?.id}
              fetchData={fetchData}
              setOpenBookingDetail={() => setOpenBookingDetail(true)}
              setIdToOpen={setIdToOpen}
              phoneNumber={booking?.itinerary.provider.phone_number!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default BookingHistoryPage;

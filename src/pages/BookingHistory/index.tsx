import React, { useEffect } from 'react';
import BookingCard from './components/BookingCard';
import { useQueryBookingsQuery } from '../../generated/graphql';
import Header from './components/Header';
import { useFooterStore } from '../../store';

const BookingHistoryPage = () => {
  const { turnFooter } = useFooterStore();
  const userId = localStorage.getItem('userId');
  const parsedUserId = userId ? parseInt(userId) : null;

  const { data, refetch } = useQueryBookingsQuery({
    fetchPolicy: 'no-cache',
    variables: {
      where: {
        user_id: {
          _eq: parsedUserId,
        },
      },
    },
  });

  const fetchData = () => {
    refetch();
  };

  useEffect(() => {
    turnFooter();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      <Header />
      <div className="p-4">
        {data?.bookings.map((booking, index) => (
          <BookingCard
            key={index}
            startLocation={
              booking.itinerary.route.city.routes[0].startlocation?.name
            }
            endLocation={
              booking.itinerary.route.city.routes[0].endlocation?.name
            }
            option={booking.itinerary.option.round_type}
            price={booking.itinerary.price}
            status={booking.status}
            vehicleType={booking.itinerary.vehicle_type.type}
            dateTime={booking?.booking_date}
            note={booking?.note ?? ' '}
            id={booking?.id}
            fetchData={fetchData}
          />
        ))}
      </div>
    </div>
  );
};
export default BookingHistoryPage;

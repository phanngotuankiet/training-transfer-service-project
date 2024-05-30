import React from 'react';
import BookingCard from '../components/BookingCard';
import profileImage from '../../assets-src/images/path-to-danang.png';



const BookingHistoryPage = () => {
  const bookings = [
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: 'Sắp đến',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sân khách sạn'
    },
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: 'Đã hoàn thành',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sân khách sạn'
    },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative bg-blue-600 text-white p-4 rounded-b-lg">
        <h1 className="text-xl font-bold">Lịch sử chuyến đi</h1>
        <p>Tra cứu thông tin về chuyến đi</p>
        <img 
          src={profileImage} 
          alt="Profile" 
          className="absolute top-4 right-4 w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="p-4">
        {bookings.map((booking, index) => (
          <BookingCard
            key={index}
            from={booking.from}
            to={booking.to}
            price={booking.price}
            status={booking.status}
            time={booking.time}
            note={booking.note}
          />
        ))}
      </div>
    </div>
  );
};

export default BookingHistoryPage;
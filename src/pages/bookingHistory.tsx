import React from 'react';
import { Page } from 'zmp-ui';
import BookingCard from '../components/BookingCard';
import OuterRectangle700 from '../assets/svgs/OuterRectangle700';

const BookingHistoryPage = () => {
  // dữ liệu này lấy từ API
  const bookings = [
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: 'Sắp đến',
      typeOfCar: 'Xe 4 chỗ',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sảnh khách sạn',
      roundTrip: true,
    },
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: "Completed",
      typeOfCar: 'Xe 16 chỗ',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn',
      roundTrip: false,
    },
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: "Completed",
      typeOfCar: 'Xe 16 chỗ',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn',
      roundTrip: false,
    },
    {
      from: 'Ga Đà Nẵng',
      to: 'Hội An',
      price: '1,005K',
      status: "Completed",
      typeOfCar: 'Xe 16 chỗ',
      time: '12h00 | 14/05/2024',
      note: 'Đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn đón ở trước sảnh khách sạn',
      roundTrip: false,
    },
    // ...
  ];
  return (
    <Page className="bg-gray-100 min-h-screen">

      <div className="flex justify-between h-[120px] bg-blue-600 text-white p-4 rounded-b-lg">

        <div className="flex-col space-y-3 my-auto">

          <h1 className="text-lg roboto leading-6 font-bold">Lịch sử chuyến đi</h1>

          <p className="roboto font-normal leading-[18px]">Tra cứu thông tin về chuyến đi</p>

        </div>

        <div className="-translate-y-[17px] ">
          <OuterRectangle700 />
        </div>

      </div>

      <div className="p-5 mb-11">
        {bookings.map((booking, index) => (
          <BookingCard
            key={index}
            from={booking.from}
            to={booking.to}
            price={booking.price}
            status={booking.status}
            typeOfCar={booking.typeOfCar}
            time={booking.time}
            note={booking.note}
            roundTrip={booking.roundTrip}
          />
        ))}
      </div>

    </Page>
  );
};

export default BookingHistoryPage;
import React from 'react';
import { OuterRectangle2 } from '../../../assets/svgs';
import DoubleTrip from '../../../assets/images/happy-couple-sit-in-the-car.png';

const Header = () => {
  return (
    <div className="h-[119px] bg-gradient-to-r from-[#0D67DF] to-[#016BF5] w-full relative rounded-b-2xl">

      <div className="absolute top-1/2 -translate-y-1/2 left-5">
        <p className="roboto text-lg font-bold text-white">Lịch sử chuyến đi</p>
        <p className="roboto text-sm font-normal text-white mt-2">
          Tra cứu thông tin về chuyến đi
        </p>
      </div>

      <div className="absolute top-0 right-[17px]">
        <OuterRectangle2 />
      </div>

      <img
        src={DoubleTrip}
        alt="double-trip"
        className="absolute top-0 right-[17px] h-[98px] w-[125px] object-cover"
      />

    </div>
  );
};

export default Header;

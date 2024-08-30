import React, { useEffect } from 'react';
import { Page, useNavigate } from 'zmp-ui';
import screenUrl from '../constants/screenUrl';
import CarImg from '../assets/images/car.webp';
import SplashImage from '../assets/images/SplashBg.webp';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(screenUrl.selectCity);
    }, 500);
  }, []);

  return (
    <Page className="page">
      <div className=" h-[100vh] relative z-[1000]">

        <div className="absolute top-0 left-0 right-0">

          <img src={SplashImage} alt="splash-bg" className="w-full" />

        </div>

        <div className="w-full bg-blue-600 rounded-3xl h-fit absolute bottom-0 p-8">
          <p className="font-bold text-2xl text-white leading-9 mb-4">
            Đặt Xe Du Lịch Naikyo
          </p>

          <div className="h-28">

            <img src={CarImg} alt="car" />

          </div>

        </div>
      </div>
    </Page>
  );
};

export default HomePage;

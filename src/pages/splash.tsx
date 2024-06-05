import React, { useEffect, useState } from 'react';
import { Page, useNavigate } from 'zmp-ui';
import screenUrl from '../constants/screenUrl';
import { getPhoneNumber, getAccessToken, authorize } from 'zmp-sdk/apis';
import { RightArrow } from '../assets/svgs';
import CarImg from '../assets/images/car.png';
import SplashImage from '../assets/images/SplashBg.png';
import { useLoginMutation } from '../generated/graphql';
import { useFooterStore } from '../store';

const HomePage = () => {
  const { offFooter } = useFooterStore();
  const [accessToken, setAccessToken] = useState('');
  const [phoneToken, setPhoneToken] = useState('');
  const navigate = useNavigate();
  const [loginActionMutation] = useLoginMutation({
    fetchPolicy: 'no-cache',
  });

  const savePhoneAccessToken = async () => {
    getPhoneNumber({
      success: async (data) => {
        let { token } = data;
        setPhoneToken(token ?? '');
      },
      fail: () => {
        savePhoneAccessToken();
      },
    });
  };

  const saveAccessToken = async () => {
    const accessToken = await getAccessToken({});
    setAccessToken(accessToken);
  };

  const handleGetToken = async () => {
    await authorize({
      scopes: ['scope.userInfo'],
      success: async () => {
        saveAccessToken();
      },
      fail: () => {
        saveAccessToken();
      },
    });
  };

  const offSplashAndNextScreen = () => {
    navigate(screenUrl.selectCity);
  };

  const handleLogin = async () => {
    try {
      const { data } = await loginActionMutation({
        variables: { token: accessToken, tokenGetPhone: phoneToken },
      });

      if (data?.actionLogin) {
        localStorage.setItem('token', data.actionLogin.token);
        localStorage.setItem('userId', data.actionLogin.userId);
        localStorage.setItem('name', data?.actionLogin.name);
      }
      offSplashAndNextScreen();
    } catch (error) {
      console.log('Lỗi: ', error);
    }
  };

  const handleClickButton = () => {
    const hasToken = localStorage.getItem('token');
    if (hasToken) return;

    savePhoneAccessToken();
    handleGetToken();
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      offSplashAndNextScreen();
      return;
    }

    if (accessToken && phoneToken) {
      handleLogin();
    }
  }, [accessToken, phoneToken]);

  useEffect(() => {
    offFooter();
  }, []);

  return (
    <div>
      <Page className="page">
        <div className=" h-[100vh] relative">
          <div className="absolute top-0 left-0 right-0">
            <img src={SplashImage} alt="splash-bg" className="w-full" />
          </div>
          <div className="w-full bg-blue-600 rounded-3xl h-[350px] absolute bottom-0 p-8">
            <p className="font-bold text-2xl text-white leading-9 poppins">
              Đặt Xe Du Lịch
            </p>
            <p className="text-white font-normal leading-5 roboto text-base mb-5">
              Nhanh chóng dễ dàng với giá tốt nhất!
            </p>
            <div className="h-28">
              <img src={CarImg} alt="car" />
            </div>
            <div className="flex justify-center">
              <p className="text-white mt-3 roboto leading-[18px] text-center max-w-60">
                Cho phép liên hệ qua số điện thoại để trải nghiệm dịch vụ tốt
                nhất
              </p>
            </div>
            <button
              className=" w-full mt-3 flex justify-center gap-3
                bg-white text-[#006AF5] font-bold py-4 px-6 rounded-xl
                shadow-md transition duration-300 ease-in-out transform
                hover:bg-white hover:shadow-lg hover:scale-105
                active:bg-white active:scale-95
                focus:outline-none focus:ring-4
              "
              onClick={handleClickButton}
            >
              <p className="font-normal roboto text-base leading-4 roboto">
                Cho phép gọi và SĐT
              </p>
              <RightArrow />
            </button>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default HomePage;

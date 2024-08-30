import React, { useEffect } from 'react';
import { Page } from 'zmp-ui';
import CarImg from '../assets/images/carAccount.png';
import RoundedBottom from '../assets/images/roundedBottom.png';
import QR from '../assets/images/qrchinh.jpg';
import { saveImageToGallery, openShareSheet } from 'zmp-sdk/apis';
import { DownloadSvg } from '../assets/svgs';
import { toast } from 'react-toastify';
import { useFooterStore } from '../store';
import { Icon, useNavigate } from 'zmp-ui';
import { FaHistory } from 'react-icons/fa';
import screenUrl from '../constants/screenUrl';
import useAuthStore from '../store/authStore';
import useFollowOA from '../utils/useFollowOA';
import useCheckFollowStatus from '../utils/useCheckFollowStatus';
import useUnfollowOA from '../utils/useUnfollowOA';
import naikyoLogo from '../assets/images/naikyoLogo.jpg';
import useLogout from '../hooks/useLogout';

const AccountPage = () => {
  const { turnFooter } = useFooterStore();
  const { token } = useAuthStore();
  const logout = useLogout();

  const navigate = useNavigate();

  const didFollowOA = useCheckFollowStatus(token);
  const followOA = useFollowOA();
  const unfollowOA = useUnfollowOA();

  const { name } = useAuthStore();
  const nameGot = name;

  const saveImage = async () => {
    try {
      await saveImageToGallery({
        imageUrl:
          'https://naikyo.sgp1.digitaloceanspaces.com/zalo-mini-apps/z5711210664074_31acee0d36e28817ddedee35bea0d3b8.jpg',
      });

      toast.success('Đã lưu thành công', {
        position: 'top-center',
      });
    } catch (error) {
      toast.error('Đã có lỗi xảy ra, vui lòng thử lại', {
        position: 'top-center',
      });
    }
  };

  const showShareSheet = async () => {
    try {
      await openShareSheet({
        type: 'link',
        data: {
          link: `https://zalo.me/s/${import.meta.env.VITE_APP_ID}/${location.pathname}`,
          chatOnly: false,
        },
      });
    } catch (err) { }
  };

  const moveToHistoryTrips = () => {
    navigate(screenUrl.history);
  }

  useEffect(() => {
    turnFooter();

    return () => {
      logout();
    };
  }, [turnFooter]);

  return (
    <Page>
      <div className="h-32 poppins bg-gradient-to-r from-[#0D67DF] to-[#3D8FFD] rounded-b-2xl relative text-white">

        <div className="absolute top-1/2 -translate-y-1/2 ms-5">

          <p className="text-sm">Xin chào,</p>
          <p className="font-bold text-lg">
            {/* {data?.users[0]?.name ?? 'Quý Khách'} */}
            {nameGot ?? 'Quý Khách'}
          </p>

        </div>

        <img
          src={CarImg}
          alt="car"
          className="w-28 absolute top-3 right-16 z-20"
        />

        <img
          src={RoundedBottom}
          alt="rounded"
          className="w-32 absolute top-0 right-5 z-10"
        />

      </div>

      {
        token && <div className="rounded-xl p-5 mx-5 mt-5 bg-[#F5F5F5] border border-gray-200 poppins -mb-9">
          <div onClick={moveToHistoryTrips} className="flex space-x-2"><FaHistory className="font-light" /> <p>Lịch sử đặt chuyến</p></div>
        </div>
      }

      <div className="p-5 mt-8">
        <div className="bg-[#F5F5F5] flex items-center flex-col px-5 pt-5 pb-2 rounded-xl">

          <p className="text-center font-bold mb-3">
            Chia sẻ mã QR này để giúp mọi người đặt xe dễ dàng{' '}
          </p>

          <img src={QR} alt="qr" className="w-64 mb-6" />

          <div className="flex gap-3 -translate-y-5 justify-between">

            <button
              className="min-w-32 flex items-center gap-2 bg-white px-5 py-2 rounded-2xl mt-4 shadow-lg"
              onClick={saveImage}
            >

              <div className="w-5">
                <DownloadSvg />
              </div>

              Tải xuống
            </button>

            <button
              className="min-w-32 bg-white px-5 py-2 rounded-2xl mt-4 shadow-lg flex space-x-[5px]"
              onClick={showShareSheet}
            >
              <Icon icon="zi-share-external-1" className="text-black" />
              <p className="translate-y-[3px]">Chia sẻ</p>
            </button>

          </div>
        </div>
      </div>
      {
        token &&
        <div className="rounded-xl p-5 mx-5 bg-white border border-gray-200 poppins -mb-9">
          <div className="flex justify-between">

            <div className="mt-1 flex space-x-2">
              <img src={naikyoLogo} className="w-[33px] h-[33px]" />

              <p className="font-bold my-auto">Đặt xe du lịch Naikyo</p>
            </div>

            {!didFollowOA
              ?
              <button onClick={followOA} className="text-sm font-bold px-3 py-1 rounded-2xl text-white bg-[#176ddd] tracking-wide">Quan tâm</button>
              :
              <button onClick={unfollowOA} className="text-sm font-bold px-3 py-1 rounded-2xl text-white bg-gray-400 tracking-wide">Đã quan tâm</button>
            }

          </div>
        </div>
      }

    </Page >
  );
};

export default AccountPage;

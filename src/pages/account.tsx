import React, { useEffect } from 'react';
import { Page } from 'zmp-ui';
import CarImg from '../assets/images/carAccount.png';
import RoundedBottom from '../assets/images/roundedBottom.png';
import QR from '../assets/images/qr.png';
import { saveImageToGallery, openShareSheet } from 'zmp-sdk/apis';
import { DownloadSvg } from '../assets/svgs';
import { toast } from 'react-toastify';
import { useGetNameUserByIdQuery } from '../generated/graphql';
import { useFooterStore } from '../store';
import { Icon } from 'zmp-ui';

const AccountPage = () => {
  const { turnFooter } = useFooterStore();
  const userId: string = localStorage.getItem('userId') ?? '0';
  const { data } = useGetNameUserByIdQuery({
    variables: { userId: parseInt(userId) },
    fetchPolicy: 'no-cache',
  });

  const saveImage = async () => {
    try {
      await saveImageToGallery({
        imageUrl:
          'https://res.cloudinary.com/doguzyfn7/image/upload/v1717558517/dat-xe-du-lich_05-06-2024_1_ubeowa.jpg',
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

  useEffect(() => {
    turnFooter();
  }, [turnFooter]);

  return (
    <Page>
      <div className="h-32 bg-gradient-to-r from-[#0D67DF] to-[#3D8FFD] rounded-b-2xl relative text-white">

        <div className="absolute top-1/2 -translate-y-1/2 ms-5">

          <p className="text-sm">Xin chào,</p>
          <p className="font-bold text-lg">
            {data?.users[0]?.name ?? 'Quý Khách'}
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

      <div className="p-5 mt-10">
        <div className="bg-[#F5F5F5] flex items-center flex-col px-5 pt-5 pb-2 rounded-xl">

          <p className="text-center font-bold mb-3">
            Chia sẻ mã QR này để giúp mọi người đặt xe dễ dàng{' '}
          </p>

          <img src={QR} alt="qr" className="w-72" />

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
    </Page>
  );
};

export default AccountPage;

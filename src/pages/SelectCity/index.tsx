import React, { useEffect } from 'react';
import { Page } from 'zmp-ui';
import { useGetAllCitiesQuery } from '../../generated/graphql';
import CardCity from './components/CardCity';
import { useFooterStore } from '../../store';
import carShadowImage from "../../assets/images/car-shawdow.webp";
import useLogout from '../../hooks/useLogout';

const SelectCityPage = () => {
  const { turnFooter } = useFooterStore();
  const { data } = useGetAllCitiesQuery({
    fetchPolicy: "no-cache"
  });
  const logout = useLogout();

  useEffect(() => {
    turnFooter();

    return () => {
      logout();
    };
  }, []);

  return (
    <Page className="page">
      <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto mt-2">
        <h1 className="text-[51px] -ml-4 font-bold overpass text-blue-600 leading-[48px]">
          Đặt xe du lịch
        </h1>

        <div className="flex space-x-10 mt-4">
          <div className="text-gray-600 roboto leading-5 text-sm font-medium text-left">
            Nhanh chóng
            <br />
            và dễ dàng!
          </div>

          <img fetchPriority={'low'} src={carShadowImage} className="w-[44vw] h-[10vh]" />

        </div>

        <div className="flex flex-col mt-2 space-y-2 overflow-y-auto w-full h-full">
          {data?.cities
            .filter(city => city.isactive)
            .map(city => (
              <CardCity
                key={city.id}
                image={city.img || ''}
                name={city.name}
                id={city.id}
              />
            ))}
        </div>

        <div className="h-16" />
      </div>
    </Page>
  );
};

export default SelectCityPage;

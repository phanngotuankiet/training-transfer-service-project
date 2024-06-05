import React, { useEffect } from 'react';
import { Page } from 'zmp-ui';
import { useGetAllCitiesQuery } from '../../generated/graphql';
import CardCity from './components/CardCity';
import CarSVGClear from '../../svgs/CarSVG-clear';
import { useFooterStore } from '../../store';

const SelectCityPage = () => {
  const { turnFooter } = useFooterStore();
  const { data } = useGetAllCitiesQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    turnFooter();
  }, []);

  return (
    <Page className="page">
      <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto mt-2">
        <h1 className="text-[51px] -ml-4 font-bold overpass text-blue-600 leading-[48px]">
          Đặt xe du lịch
        </h1>

        <div className="flex flex-col">
          <div className="flex space-x-10">
            <div className="text-gray-600 roboto leading-5 mb-2 text-sm font-medium mt-4 text-left mr-4">
              Nhanh chóng
              <br />
              và dễ dàng!
            </div>

            <CarSVGClear />
          </div>
        </div>

        <div className="flex flex-col mt-2 space-y-2 overflow-y-auto w-full">
          {data?.cities.map((city) => {
            if (!city.isactive) return;
            return (
              <CardCity
                key={city.id}
                image={city.img ?? ''}
                name={city.name}
                id={city.id}
              />
            );
          })}
        </div>
        <div className="h-16"> </div>
      </div>
    </Page>
  );
};

export default SelectCityPage;

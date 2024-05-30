import React from 'react';
import { Page } from 'zmp-ui';
import CarImg from '../../assets/images/car-shawdow.png';
import { useGetAllCitiesQuery } from '../../generated/graphql';
import City from './components/City';

const SelectCityPage = () => {
  const { data } = useGetAllCitiesQuery({
    fetchPolicy: 'no-cache',
  });

  return (
    <Page className="page mt-10">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <p className="text-blue-500 text-5xl font-bold overpas">
            Đặt xe du lịch
          </p>
          <div className="mt-2 flex justify-between">
            <p className="inline-block max-w-24 text-[#646464] text-[1rem]">
              Nhanh chóng và dễ dàng!
            </p>
            <img src={CarImg} alt="car" className="w-44 inline-block" />
          </div>
        </div>
      </div>
      <div className="px-5 flex flex-col gap-4">
        {data?.cities.map((city) => {
          if (!city.isactive) return;
          return (
            <City
              key={city.id}
              imageUrl={city.img ?? ''}
              name={city.name}
              id={city.id}
            />
          );
        })}
      </div>
    </Page>
  );
};

export default SelectCityPage;

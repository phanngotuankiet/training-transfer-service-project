import React from 'react';
import { Page } from 'zmp-ui';
import TopNavBar from '../../components/layout/TopNavBar';
import ListRoute from '../RouteCity/components/ListRoute';
import { getRouteParams } from 'zmp-sdk/apis';
import { useGetCityByIdQuery } from '../../generated/graphql';
import { useFooterStore } from '../../store';
import FadeLoader from 'react-spinners/FadeLoader';

const RouteCity = () => {
  const { cityId } = getRouteParams();
  const { data } = useGetCityByIdQuery({
    variables: { cityId: parseInt(cityId) },
    fetchPolicy: 'no-cache',
  });
  const { footerActive } = useFooterStore();

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#009cff" height={15} width={3} />
      </div>
    );
  }

  return (
    <div>
      <TopNavBar title="Đà Nẵng" footerActive={footerActive} />
      <Page className="page relative pb-32 mt-11">
        <div className="relative p-2">
          <img
            src={data?.cities[0].img ?? ''}
            className="w-full object-cover h-56 rounded-lg"
            alt="city"
          />
          <div className="flex gap-4 p-4 bg-[#006AF5] rounded-r-xl absolute bottom-0 left-0 w-11/12 translate-y-4">
            <p className="text-white font-bold min-w-[70px] text-[16px]">
              {data?.cities[0].name}
            </p>
            <p className="text-white text-[14px]">{data?.cities[0].descr}</p>
          </div>
        </div>
        <ListRoute />
      </Page>
    </div>
  );
};

export default RouteCity;

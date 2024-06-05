import React from 'react';
import Route from './Rote';
import { getRouteParams } from 'zmp-sdk/apis';
import { useGetRouteByCityIdAnd4SeaterVehicleQuery } from '../../../generated/graphql';

const ListRoute = () => {
  const { cityId } = getRouteParams();
  const { data } = useGetRouteByCityIdAnd4SeaterVehicleQuery({
    variables: { cityId: parseInt(cityId) },
    fetchPolicy: 'no-cache',
  });

  return (
    <div className="translate-y-6 p-4">
      <div className="flex justify-between items-center">
        <p className="font-bold text-xl">Chuyến đi phổ biến</p>
        <p className="text-sm text-[#A1A1A1]">*Giá tính theo xe 4 chỗ</p>
      </div>
      {data?.routes.map((route) => {
        return (
          <Route
            key={route.id}
            id={route.id}
            endLocation={route.endlocation.name}
            startLocation={route.startlocation.name}
            oneWayPrice={route.one_way[0]?.price || '....'}
            roundPrice={route.round_trip[0]?.price || '....'}
          />
        );
      })}
    </div>
  );
};

export default ListRoute;

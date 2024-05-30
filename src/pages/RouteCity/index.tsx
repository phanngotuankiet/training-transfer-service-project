import React from 'react';
import { getRouteParams } from 'zmp-sdk/apis';

const RouteCity = () => {
  const { id } = getRouteParams();

  return <div>routecity</div>;
};

export default RouteCity;

import React from 'react';
import TopNavBar from '../../components/layout/TopNavBar';
import { Page } from 'zmp-ui';
import Banner from './components/Banner';
import DeparturePoint from './components/DeparturePoint';
import VehicleSelection from './components/VehicleSelection';
import TripType from './components/TripType';
import PickTime from './components/PickTime';
import Note from './components/Note';
import Summary from './components/Summary';

const BookingPage = () => {
  return (
    <div className="pb-16">
      <TopNavBar title="Đặt chuyến đi" footerActive={false} />
      <Page className="page mt-11 p-4">
        <Banner />
        <DeparturePoint />
        <VehicleSelection />
        <TripType />
        <PickTime />
        <Note />
      </Page>
      <Summary />
    </div>
  );
};

export default BookingPage;

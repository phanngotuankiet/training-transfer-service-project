import React, { useEffect, useState } from 'react';
import TopNavBar from '../../components/layout/TopNavBar';
import { Page } from 'zmp-ui';
import Banner from './components/Banner';
import DeparturePoint from './components/DeparturePoint';
import VehicleSelection from './components/VehicleSelection';
import TripType from './components/TripType';
import PickTime from './components/PickTime';
import Note from './components/Note';
import Summary from './components/Summary';
import { useGetAllItineraryByIdRouteQuery } from '../../generated/graphql';
import { MoonLoader } from 'react-spinners';
import { useBookingStore, useFooterStore } from '../../store';
import { getRouteParams } from 'zmp-sdk/apis';

const BookingPage = () => {
  const { offFooter } = useFooterStore();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = getRouteParams();
  const { updateListItinerary, updateBookingCurrent } = useBookingStore();
  const { data } = useGetAllItineraryByIdRouteQuery({
    fetchPolicy: 'no-cache',
    variables: { idRoute: parseInt(id) },
  });

  useEffect(() => {
    offFooter();
    if (data) {
      const itinerary4Seater = data.itinerary.filter(
        (itinerary) =>
          itinerary.vehicle_types_id === 1
            || itinerary.vehicle_types_id === 2
            || itinerary.vehicle_types_id === 3
        //hiện tại chỉ có 3 loại xe, trong tương lai ưng thì thêm vào
      )[0];

      const itineraries = data.itinerary.map((itinerary) => ({
        idItinerary: itinerary.id,
        fromCity: itinerary.route.startlocation.name,
        endCity: itinerary.route.endlocation.name,
        timeStart: new Date().toISOString().slice(0, 16),
        vehicleType: itinerary.vehicle_type.type,
        tripType: itinerary.option.round_type,
        price: itinerary.price,
        idTripType: itinerary.option_id,
        idvehicleType: itinerary.vehicle_types_id,
        note: '',
      }));

      const newBooking = {
        idItinerary: itinerary4Seater.id,
        fromCity: itinerary4Seater.route.startlocation.name,
        endCity: itinerary4Seater.route.endlocation.name,
        timeStart: new Date().toISOString().slice(0, 16),
        vehicleType: itinerary4Seater.vehicle_type.type,
        tripType: itinerary4Seater.option.round_type,
        price: itinerary4Seater.price,
        idTripType: itinerary4Seater.option_id,
        idvehicleType: itinerary4Seater.vehicle_types_id,
        note: '',
      };

      updateBookingCurrent(newBooking);
      updateListItinerary(itineraries);
    }
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <MoonLoader color="#006AF5" />
      </div>
    );
  }

  return (
    <div className="pb-16">
      <TopNavBar title="Đặt chuyến đi" />

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

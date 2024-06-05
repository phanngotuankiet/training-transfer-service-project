import React from 'react';
import CardCity from '../pages/selectCity/components/CardCity';
import DestinationImg from '../assets/images/dalat.jpeg';
import DanangDep from '../assets/images/danang-dep.webp';
import Hue from '../assets/images/hue.jpeg';
import Dalat from '../assets/images/dalet.jpeg';
import { useGetAllCitiesQuery } from '../generated/graphql';

const ImageGallery = () => {

  const destinations = [
    { name: "Đà Nẵng", image: DestinationImg },
    { name: "Nha Trang", image: Hue },
    { name: "Hội An", image: Dalat },
    { name: "Đà Lạt", image: DestinationImg },
    { name: "Phong Nha", image: DanangDep },
    { name: "Thừa Thiên - Huế", image: DestinationImg },
    { name: "Phú Yên", image: DestinationImg },
  ];

  const { data } = useGetAllCitiesQuery({
    fetchPolicy: 'no-cache',
  });

  return (
    <div className="flex flex-col mt-2 space-y-2 overflow-y-auto w-full">
      {/* {destinations?.map((dest, index) => (
        <CardCity key={index} name={dest.name} image={dest.image} />
      ))} */}
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
  );
};

export default ImageGallery;
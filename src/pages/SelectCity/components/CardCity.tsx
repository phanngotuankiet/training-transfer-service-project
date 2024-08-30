import React from 'react';
import { useNavigate } from 'zmp-ui';
import screenUrl from '../../../constants/screenUrl';
import { useFooterStore } from '../../../store';

import HueImage from '../../../assets/images/hue.webp';
import DaNangImage from '../../../assets/images/Danang.webp';
import QuangNamImage from '../../../assets/images/quangnam.webp';

interface CardProps {
  id: number;
  name: string;
  image: string;
}

const CardCity: React.FC<CardProps> = ({ id, name, image }) => {
  const { offFooter } = useFooterStore();
  const navigate = useNavigate();

  const handleClick = () => {
    offFooter();

    navigate(`${screenUrl.routeCity}?cityId=${id}`);
  };

  const listCities = [
    {
      id: 15,
      image: DaNangImage
    },
    {
      id: 56,
      image: HueImage
    },
    {
      id: 46,
      image: QuangNamImage
    },
  ];

  const idExists = listCities.find(city => city.id === id)?.image || image;

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg cursor-pointer"
    >
      <img fetchPriority={'high'} src={idExists} alt={name} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-transparent to-transparent p-4">
        <span className="text-white roboto text-base leading-[22px] font-semibold absolute bottom-4 left-4">
          {name}
        </span>
      </div>
    </div>
  );
};

export default CardCity;

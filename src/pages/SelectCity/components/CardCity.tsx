import React from 'react';
import { useNavigate } from 'zmp-ui';
import useFooterStore from '../../../store/footerStore';
import screenUrl from '../../../constants/screenUrl';
import BottomLeftBlur from '../../../assets/svgs/BottomLeftBlur';

interface CardProps {
  id: number;
  name: string;
  image: string;
}

const CardCity: React.FC<CardProps> = ({ id, name, image }) => {
  const navigate = useNavigate();
  const { offFooter } = useFooterStore();

  const handleClick = () => {
    offFooter();
    navigate(`${screenUrl.routeCity}?cityId=${id}`);
  };

  return (
    <div onClick={handleClick} className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg ">

      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div
        className="absolute bottom-0 h-40 p-4 w-full bg-gradient-to-tr from-blue-600 via-transparent via-50% to-transparent"
      />


      <span className="text-white roboto text-base leading-[22px] font-semibold absolute bottom-4 left-4">
        {name}
      </span>

    </div >
  );
};

export default CardCity;

import React from 'react';
import { useNavigate } from 'zmp-ui';
import screenUrl from '../../../constants/screenUrl';
import { useFooterStore } from '../../../store';

interface IProps {
  imageUrl: string;
  name: string;
  id: number;
}

const City: React.FC<IProps> = ({ imageUrl, name, id }) => {
  const navigate = useNavigate();
  const { offFooter } = useFooterStore();

  const handleClick = () => {
    navigate(`${screenUrl.routeCity}?cityId=${id}`);
  };

  return (
    <button className="relative" onClick={handleClick}>
      <img
        src={imageUrl}
        alt="city"
        className="w-full h-40 object-cover rounded-lg"
      />
      <p className="absolute bottom-3 left-3 text-white font-bold text-lg">
        {name}
      </p>
    </button>
  );
};

export default City;

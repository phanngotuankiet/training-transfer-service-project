import React from 'react';
import { useRouter } from 'next/router'
import { useNavigate } from 'zmp-ui';

interface CardProps {
  name: string;
  image: string;
}

const CardCity: React.FC<CardProps> = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bookingHistory');
  }
     
  return (
    <div onClick={() => handleClick()} className="relative w-full h-40 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <span className="text-white font-bold">{name}</span>
      </div>
    </div>
  );
};

export default CardCity;

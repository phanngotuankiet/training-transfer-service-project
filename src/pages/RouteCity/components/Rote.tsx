import React from 'react';
import { LocationIcon } from '../../../assets/svgs';
import { useNavigate } from 'react-router-dom';
import { formatCurrencyK } from '../../../utils/formatVND';

interface IProps {
  id: number;
  startLocation: string;
  endLocation: string;
  oneWayPrice: number;
  roundPrice: number;
}

const Route: React.FC<IProps> = ({
  id,
  startLocation,
  endLocation,
  oneWayPrice,
  roundPrice,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/booking?id=${id}`);
  };

  return (
    <button
      className="p-2 w-full  mt-3 border-gray-300 rounded-xl items-center border-solid border-2 flex transition duration-300 ease-in-out hover:bg-sky-100"
      onClick={handleClick}
    >
      <div className="w-1/2 flex gap-3">
        <div className="inline-flex flex-col items-center">
          <LocationIcon color="#196CEA" />
          <div className="h-6 my-1  bg-blue-500 w-[1px]"></div>
          <LocationIcon color="#196CEA" />
        </div>
        <div className="flex flex-col justify-between items-start">
          <p className="font-bold text-gray-500 text-start text-sm">
            {startLocation}
          </p>
          <p className="font-bold text-gray-500 text-start text-sm">
            {endLocation}
          </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center gap-3">
        <div>
          <p className="text-gray-600 whitespace-nowrap">Một Chiều</p>
          <p className="text-blue-500 text-lg font-bold">
            {formatCurrencyK(oneWayPrice) ?? '.....'}
          </p>
        </div>
        <div className="w-[2px] h-12 bg-gray-300"></div>
        <div>
          <p className="text-gray-600">Khứ hồi</p>
          <p className="text-blue-500 text-lg font-bold">
            {formatCurrencyK(roundPrice) ?? '.....'}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Route;

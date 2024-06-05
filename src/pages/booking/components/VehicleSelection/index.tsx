import React, { useState } from 'react';
import { Car4Slot, Car7Slot, Car16Slot } from '../../../../assets/svgs';

const listVehicleOPtion = [
  { id: 1, name: 'Xe 4 chỗ', icon: <Car4Slot /> },
  { id: 2, name: 'Xe 7 chỗ', icon: <Car7Slot /> },
  { id: 3, name: 'Xe 16 chỗ', icon: <Car16Slot /> },
];

const VehicleSelection = () => {
  const [isActiveCar, setIsActiveCar] = useState(1);

  const handleClickCar = (id: number) => {
    setIsActiveCar(id);
  };

  return (
    <div>
      <p className="font-bold mt-5 mb-3 text-sm">Chọn xe</p>
      {/* List option */}
      <div className="flex gap-2">
        {listVehicleOPtion.map((vehicle, _) => {
          return (
            <button
              key={vehicle.id}
              className={`w-full flex flex-col items-center justify-center gap-2 p-4 border-[1px] border-[#AAB9C5] rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${isActiveCar === vehicle.id ? 'bg-[#F1F7FF] shadow-lg' : 'hover:bg-[#F1F7FF]'}`}
              onClick={() => handleClickCar(vehicle.id)}
            >
              {vehicle.icon}
              <p className="text-[#505050] text-sm">{vehicle.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleSelection;

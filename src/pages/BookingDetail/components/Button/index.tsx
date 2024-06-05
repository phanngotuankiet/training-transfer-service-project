import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PulseLoader } from 'react-spinners';

const Button = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    onClick();
  };

  return (
    <div className="flex justify-between pt-10">
      <div>
        <button
          onClick={() => navigate('/history')}
          className=" w-40 h-12 rounded-lg text-blue-600 border border-blue-600"
        >
          Hủy
        </button>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="relative w-40 h-12 rounded-lg text-white bg-blue-500"
        >
          {isLoading && (
            <div className="absolute left-1/2 top1/2 -translate-x-1/2 -translate-y-1/2">
              <PulseLoader color="#ffffff" size={5} />
            </div>
          )}
          {!isLoading && ' Lưu thông tin'}
        </button>
      </div>
    </div>
  );
};

export default Button;

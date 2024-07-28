import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Button = ({ onClick, onCancel, status }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    onClick();
  };

  useEffect(() => {
    const handleToastChange = () => {
      setIsLoading(false);
    };

    // Đăng ký sự kiện thay đổi toast
    const unsubscribe = toast.onChange(handleToastChange);

    // Hủy đăng ký sự kiện khi component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex justify-between pt-10">
      <button
        onClick={onCancel}
        className=" w-40 h-12 rounded-lg text-blue-600 border border-blue-600"
      >
        Hủy
      </button>

      <button
        onClick={handleClick}
        className={`relative w-40 h-12 rounded-lg ${status === 'Confirmed' ? 'bg-gray-400' : 'bg-blue-500'} text-white`}
        disabled={isLoading || status === 'Confirmed'}
      >
        {isLoading && (
          <div className="absolute left-1/2 top1/2 -translate-x-1/2 -translate-y-1/2">
            <PulseLoader color="#ffffff" size={5} />
          </div>
        )}

        {!isLoading && 'Lưu thông tin'}
      </button>
    </div>
  );
};

export default Button;

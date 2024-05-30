import React from 'react'
import ImageGallery from '../components/ImageGallery';
import CarSvg from '../svgs/CarSvg';

const SelectCityPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
<div className="flex flex-col items-center p-4 w-full max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Đặt xe du lịch</h1>
      <div className="flex items-center mb-4">
        <div className="flex flex-col items-start">
          <div className="flex justify-between items-center w-full" >
          <p className="text-gray-600 mb-2 text-left mr-4">Nhanh chóng<br />và dễ dàng!</p><div className="w-48">
           <CarSvg /> 
          </div>
          </div>
        </div>
      </div>
      <button className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-full flex items-center">
        Khám phá thành phố mới 
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <ImageGallery />
    </div>
    </div>
  );
}

export default SelectCityPage

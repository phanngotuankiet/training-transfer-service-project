import React from 'react'
import DaNangImg from '../../../assets/images/danang.png'
import { LocationIcon, CarSvg } from '../../../assets/svgs'
const Banner = ({
  startLocation,
  endLocation,
  car,
  option,
  price,
  bookingDate,
}) => {
  return (
    <div className="mb-5 pt-12">
      <div>
        {/* banner service */}
        <div className=" ">
          <div className="bg-blue-500 p-3 rounded-lg w-full shadow-2xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">
                  {startLocation}
                </p>
              </div>
              <div className="h-[1px] bg-white w-full"></div>
              <div className="flex items-center">
                <LocationIcon color="white" />
                <p className="text-white whitespace-nowrap font-bold">
                  {endLocation}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div>
                <CarSvg />
                <p className="text-white mt-2">{car}</p>
              </div>
              <div className="h-10 w-[1px] bg-white"></div>
              <div className="flex justify-between flex-1">
                <div className="flex flex-col justify-between">
                  <p className="text-white">{option}</p>
                  <p className="text-white">Đón lúc: {bookingDate}</p>
                </div>
                <div className=" flex flex-col justify-between">
                  <p className="text-white">Giá tiền</p>
                  <p className="text-white font-bold text-xl">
                    {price
                      ? price.toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })
                      : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

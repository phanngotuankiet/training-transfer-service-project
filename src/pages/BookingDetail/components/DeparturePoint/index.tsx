import React from 'react'
import { LocationIcon } from '../../../../assets/svgs'

const DeparturePoint = ({ startLocation, endLocation }) => {
  return (
    <div>
      <p className="font-bold text-sm">Điểm khởi hành</p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2 rounded-lg bg-[#F1F7FF] p-3 w-full border-[1px] border-[#AAB9C5]">
          <LocationIcon color="#196CEA" />
          <p>{startLocation}</p>
        </div>
        <div className="flex gap-2 rounded-lg bg-white p-3 w-full border-[1px] border-[#AAB9C5]">
          <LocationIcon color="#196CEA" />
          <p>{endLocation}</p>
        </div>
      </div>
    </div>
  )
}

export default DeparturePoint

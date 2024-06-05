import React from "react";
import HappyCoupleImg from '../images/happy-couple-sit-in-the-car.png';

const OuterRectangle700 = () => {
  return (<div>
    <svg width="135" height="104" viewBox="0 0 135 104" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M0 0H135V56C135 82.5097 113.51 104 87 104H48C21.4903 104 0 82.5097 0 56V0Z" fill="#3C91FF" />

      {/* <svg width="124" height="97" viewBox="0 0 124 97" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path d="M0 0H124V52C124 76.8528 103.853 97 79 97H45C20.1472 97 0 76.8528 0 52V0Z" fill="#CDE3FF" />

    </svg> */}


    </svg>

    <img src={HappyCoupleImg} className="translate-x-3 -mt-[103px] w-[124px] h-[97px]" />
  </div >
  );
}

export default OuterRectangle700;
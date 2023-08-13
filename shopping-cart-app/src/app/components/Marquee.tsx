import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <div className="bg-purple-500 text-white w-full h-[50px] flex items-centers">
      <Marquee speed={60} gradient={false} pauseOnHover className="uppercase ">
        <div className="ml-10 mr-10">
          10% off your first purchase-subscribe to our news letter
        </div>
        <div className="ml-10 mr-10">Free shipping and returns</div>
        <div className="ml-10 mr-10">
          Sale-50% discount on every 2 products you buy!!!
        </div>
      </Marquee>
    </div>
  );
};

export default Marque;

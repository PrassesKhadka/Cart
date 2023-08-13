'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" w-full sm:h-[250px min-h-screen flex flex-col justify-center items-center ">
      <Link href="/pages/products">
        <div className=" uppercase mt-3 bg-blue-400 p-4 rounded-md ">
          Shop Now
        </div>
      </Link>
      <img
        src="/hero-image.jpg"
        alt="image"
        className="h-full max-h-screen lg:h-[800px] xl:h-[600px] "
      ></img>
    </section>
  );
};

export default Hero;

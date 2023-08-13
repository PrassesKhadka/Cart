'use client';
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=" w-full sm:h-[250px] min-h-screen flex justify-center items-center relative ">
      <img
        src="/hero-image.jpg"
        alt="image"
        className="h-full max-h-screen lg:h-[800px] "
      ></img>
      <Link href="/pages/products">
        <div className="absolute uppercase sm:bottom-[400px] left-[160px] bottom-[650px] xl:left-[500px] xl:bottom-[200px] bg-blue-400 p-4 rounded-md ">
          Shop Now
        </div>
      </Link>
    </section>
  );
};

export default Hero;

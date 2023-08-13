import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// shadcn ui components

const Hero = () => {
  return (
    <section className=" w-full  max-h-screen flex justify-center items-center relative -z-20">
      <img
        src="/hero-image.jpg"
        alt="image"
        className="h-full max-h-screen lg:h-[800px] "
      ></img>
      <Link href="/pages/products">
        <div className="absolute uppercase sm:bottom-2 left-2 bottom-5 xl:left-[500px] xl:bottom-[200px] bg-blue-400 p-4 rounded-md ">
          Shop Now
        </div>
      </Link>
    </section>
  );
};

export default Hero;

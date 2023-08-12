import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// shadcn ui components

const Hero = () => {
  return (
    <section className=" w-full  min-h-screen">
      <img src="/hero-image.jpg" alt="image" className="h-full "></img>
    </section>
  );
};

export default Hero;

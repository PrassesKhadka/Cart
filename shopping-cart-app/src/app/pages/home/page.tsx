'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/ui/ui/button';

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center md:pt-[15%] xl:pt-[5%] xxl:pt-[5%]">
      {/* Left section */}
      <div className="w-full h-[50%] max-h-[50%] flex justify-center items-center flex-1 text-center flex-col p-5 pb-6 mt-5 md:mt-0 md:mb-0 md:pt-[10%] md:pb-[10%]">
        <div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ">
            Whoever said that money can't buy happiness simply didn't know where
            to go shopping
          </h2>
        </div>
        <div className="m-2">
          <Button className="upercase mr-3 bg-slate-300 text-black hover:bg-slate-400">
            Learn More
          </Button>
          <Link href="/pages/products">
            <Button className="upercase bg-blue-600 mt-2 text-white hover:bg-blue-500">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Right section */}
      <div className=" max-h-screen  justify-center items-center flex-1">
        <img
          src="/hero.png"
          alt="image"
          className="h-full max-h-screen lg:h-[800px] xl:h-[600px] border-5"
        ></img>
      </div>
    </section>
  );
};

export default Hero;

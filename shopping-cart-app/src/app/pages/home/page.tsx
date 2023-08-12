import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// shadcn ui components
import { Badge } from '@/app/components/ui/ui/badge';
import { buttonVariants } from '@/app/components/ui/ui/button';
// React responsive carousal
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack, BiArrowFromRight } from 'react-icons/bi';

const Hero = () => {
  return (
    <section className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <div className="min-h-screen absolute">
        <img src="/hero-image.jpg" alt="hero-image" className="object-cover" />
        <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-blue-600 absolute bottom=[25px] md:bottom-[75px] left-0 text-black text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
          SHOP NOW
        </div>
      </div>
    </section>
  );
};

export default Hero;

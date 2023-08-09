import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// shadcn ui components
import { Badge } from '@/app/components/ui/ui/badge';
import { buttonVariants } from '@/app/components/ui/ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col gap-3 py-6 lg:flex-row">
      <div className="">This is the home page</div>
      <Link className="bg-red-500" href="/pages/product">
        Shop Now
      </Link>
    </section>
  );
};

export default Hero;

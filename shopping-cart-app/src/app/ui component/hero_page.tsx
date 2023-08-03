import React from 'react';
import { Badge } from '../components/ui/ui/badge';
import Image from 'next/image';
import { buttonVariants } from '../components/ui/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col gap-3 py-6 lg:flex-row">
      <div className="flex-1 border bg-pink-300 rounded-lg p-3">
        {/* left side */}
        <div className="flex">
          <div className="flex-1">
            <Badge className="border bg-blue-200 p-2 text-red-500">
              Sale upto 50%
            </Badge>
            <h1 className="font-serif scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Women's fashion
            </h1>
            <p className="font-mono leading-7 [&:not(:first-child)]:mt-6">
              Anyone can beat you but no one can beat your outfit as long as you
              wear amazon clothings
            </p>
            <Link
              href="/cart"
              className={buttonVariants({ variant: 'outline' })}
            >
              Shop Now
            </Link>
          </div>

          <div className="flex-1">
            <Image
              src="/model-women-2.png"
              alt="hero-img"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-1 flex-row gap-3">
        <div className="border bg-purple-200 rounded-sm">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Men's Fashion
          </h4>
          <Link href="/cart" className={buttonVariants({ variant: 'outline' })}>
            Shop Now
          </Link>
          <Image src="/hero.png" alt="hero-img" width={600} height={600} />
        </div>
        <div className="border bg-orange-200 rounded-sm">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Kid's Fashion
          </h4>
          <Link href="/cart" className={buttonVariants({ variant: 'outline' })}>
            Shop Now
          </Link>
          <Image src="/hero.png" alt="hero-img" width={600} height={600} />
        </div>
        <div className="border bg-yellow-200 rounded-sm">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Cosmetics
          </h4>
          <Link href="/cart" className={buttonVariants({ variant: 'outline' })}>
            Shop Now
          </Link>
          <Image src="/hero.png" alt="hero-img" width={600} height={600} />
        </div>
        <div className="border bg-red-200 rounded-sm">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Accessories
          </h4>
          <Link href="/cart" className={buttonVariants({ variant: 'outline' })}>
            Shop Now
          </Link>
          <Image src="/hero.png" alt="hero-img" width={600} height={600} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

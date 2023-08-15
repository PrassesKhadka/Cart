'use client';
import React from 'react';
import { Product } from '../interface/interfaces';
import Image from 'next/image';
import BtnAddToCart from './BtnAddToCart';
import Link from 'next/link';

interface Props {
  element: Product;
}

const ProductCard = (props: Props) => {
  return (
    <div className="rounded-none overflow-hidden border m-3 p-3 flex flex-col justify-end bg-white">
      <Link href={`/pages/product/${props.element.id}`}>
        <Image
          src={props.element.image}
          alt={props.element.title}
          width={300}
          height={400}
          className="w-full p-12 lg:p-5 md:p-3"
        ></Image>
        <div className="text-xl font-feather uppercase truncate">
          {props.element.title}
        </div>
        <div className="text-green-600 m-2 font-bold text-2xl">{`${props.element.price} $`}</div>
      </Link>
      <BtnAddToCart element={props.element} />
    </div>
  );
};

export default ProductCard;

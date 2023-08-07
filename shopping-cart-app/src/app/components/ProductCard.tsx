'use client';
import React from 'react';
import { Product } from '../interface/interfaces';
import { addToCart, removeFromCart } from '../redux/Slice/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';
import Image from 'next/image';
import BtnAddToCart from './BtnAddToCart';
import { quantitySelector } from '../redux/Slice/cartSlice';

interface Props {
  element: Product;
}

const ProductCard = (props: any) => {
  return (
    <div className="h-50 w-40 p-2  rounded-sm shadom-sm overflow-hidden bg-slate-100 border">
      <Image
        src={props.element.image}
        alt={props.element.title}
        width={300}
        height={400}
        className="w-full object-cover"
      ></Image>
      <div>{props.element.title}</div>
      <div>{`${props.element.price} $`}</div>
      <BtnAddToCart element={props.element} />
    </div>
  );
};

export default ProductCard;

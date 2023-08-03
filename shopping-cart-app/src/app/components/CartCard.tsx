'use client';
import React from 'react';
import { CartItem } from '../interface/interfaces';
import Image from 'next/image';
import BtnIncDec from './BtnIncDec';
import { useAppDispatch } from '../redux/store';
import {
  addToCart,
  deleteForEach,
  removeFromCart,
} from '../redux/Slice/cartSlice';

interface Props {
  element: CartItem;
}
//you can destructure the props like {element}:Props
const CartCard = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-around items-center shadow-sm rounded-sm p-2 m-4 border">
      <Image
        src={props.element.product.image_path}
        alt={props.element.product.name}
        width={200}
        height={300}
        className="overflow-hidden shadow-sm rounded-sm"
      />
      <p className="text-xl font-semibold text-orange-500">
        {props.element.product.name}
      </p>
      <p>{`${props.element.product.price} $`}</p>
      <button onClick={() => dispatch(deleteForEach(props.element.product))}>
        x
      </button>
      <BtnIncDec
        qty={props.element.quantity}
        onIncrease={() => dispatch(addToCart(props.element.product))}
        onDecrease={() => dispatch(removeFromCart(props.element.product))}
      />
      <div>
        Total:
        {` ${props.element.product.price * props.element.quantity} $`}
      </div>
    </div>
  );
};

export default CartCard;

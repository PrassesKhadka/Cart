'use client';
import React from 'react';
import { CartItem } from '../interface/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import BtnIncDec from './BtnIncDec';
import { useAppDispatch } from '../redux/store';
import {
  addToCart,
  deleteForEach,
  removeFromCart,
} from '../redux/Slice/cartSlice';
import { TrashIcon } from 'lucide-react';

interface Props {
  element: CartItem;
}
//you can destructure the props like {element}:Props
const CartCard = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="max-h-screen ">
      <div className="flex flex-col xl:flex-row justify-around items-center shadow-sm rounded-sm p-2 m-4 border bg-white text-black truncate overflow-hidden">
        <Link href={`/pages/product/${props.element.product.id}`}>
          <Image
            src={props.element.product.image}
            alt={props.element.product.title}
            width={200}
            height={300}
            className="shadow-sm rounded-sm"
          />
        </Link>
        <p className="truncate text-sm font-light text-blue-500 pl-4 truncate">
          {props.element.product.title}
        </p>
        <p className="">{`${props.element.product.price} $`}</p>
        <BtnIncDec
          qty={props.element.quantity}
          onIncrease={() => dispatch(addToCart(props.element.product))}
          onDecrease={() => dispatch(removeFromCart(props.element.product))}
        />
        <div>
          Total:
          {` ${props.element.product.price * props.element.quantity} $`}
        </div>
        <button
          className="text-red-500 p-1 rounded-sm shadow-xl"
          onClick={() => dispatch(deleteForEach(props.element.product))}
        >
          <TrashIcon className=" w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;

"use client"
import React from "react";
import { Product } from "../interface/interfaces";
import { addToCart,removeFromCart } from "../redux/Slice/cartSlice";
import { useAppDispatch,useAppSelector } from "../redux/store";
import Image from "next/image";
import BtnAddToCart  from "./BtnAddToCart";
import { quantitySelector } from "../redux/Slice/cartSlice";

interface Props
{
    element:Product;
}

const ProductCard=(props:Props)=>{
   

    return <div>
        <Image src={props.element.image_path} alt={props.element.name} width={300} height={400}></Image>
        <div>{props.element.name}</div>
        <div>{`${props.element.price} $`}</div>
        <BtnAddToCart element={props.element}/> 
    </div>
}

export default ProductCard;
import React from "react";
import { Product } from "../interface/interfaces";
import { addToCart,removeFromCart } from "../redux/Slice/cartSlice";
import { useAppDispatch,useAppSelector } from "../redux/store";
import Image from "next/image";

interface Props
{
    element:Product;
}

const ProductCard=(props:Props)=>{
    return <div>
        <Image src={props.element.image_path} alt={props.element.name} width={300} height={400}></Image>
    </div>
}

export default ProductCard;
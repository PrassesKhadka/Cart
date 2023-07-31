"use client"
import React from "react";
import { CartItem } from "../interface/interfaces";
import Image from "next/image";

interface Props
{
    element:CartItem
}
const CartCard=(props:Props)=>{
    
    return <div>
        <Image src={props.element.product.image_path} alt={props.element.product.name} width={200} height={300}/>
        <p>{props.element.product.name}</p>   
        <p>{props.element.product.price}</p>  
    </div>
}


export default CartCard;
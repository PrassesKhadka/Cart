"use client"
import React from "react";
import { CartItem } from "../interface/interfaces";
import Image from "next/image";
import BtnIncDec from "./BtnIncDec";
import { useAppDispatch } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/Slice/cartSlice";

interface Props
{
    element:CartItem
}
//you can destructure the props like {element}:Props
const CartCard=(props:Props)=>{
    const dispatch=useAppDispatch()    
    return <div>
                <Image src={props.element.product.image_path} alt={props.element.product.name} width={200} height={300}/>
                <p>{props.element.product.name}</p>   
                <p>{`${props.element.product.price} $`}</p>  
                <div>x</div>
                <BtnIncDec qty={props.element.quantity} onIncrease={()=>dispatch(addToCart(props.element.product))} onDecrease={()=>dispatch(removeFromCart(props.element.product))}/>
                <div>Total price:{`${props.element.product.price * props.element.quantity} $`}</div>
    </div>
}


export default CartCard;
"use client"
import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";

interface Props
{
    onIncrease:()=>{};
    onDecrease:()=>{};
    qty:number;
}

const BtnIncDec=(props:Props)=>{
    return <div>
        <button onClick={props.onIncrease}>+</button>
        <p>{props.qty}</p>
        <button onClick={props.onDecrease}>
            {props.qty===1 ? <TrashIcon className="w-4 h-6 text-red-600"/>
            : '-' }
        </button>
    </div>
}

export default BtnIncDec;
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/interface/interfaces";

interface Products
{
    productItem:Product[];
}

const initialState:Products={
    productItem:[]
}

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
       setProductArray:(state,action:PayloadAction<Product[]>)=>{
            state.productItem=action.payload
       }
    },
})


export const {setProductArray}=productSlice.actions;
export default productSlice;
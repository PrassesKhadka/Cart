import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
import {cartSlice} from "./Slice/cartSlice";
import productSlice from "./Slice/productSlice";
import { api } from "./Slice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        product:productSlice.reducer,
        [api.reducerPath]:api.reducer,
    },
    // Defining middleware here
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
})

//Dispatching the RTK query
setupListeners(store.dispatch)

// Setting up type fo 
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector;
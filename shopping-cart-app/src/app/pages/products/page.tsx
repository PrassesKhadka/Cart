'use client';
import React from 'react';
import ProductCard from '@/app/components/ProductCard';
import { Product } from '@/app/interface/interfaces';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { useGetProductsQuery } from '@/app/redux/Slice/apiSlice';
import { setProductArray } from '@/app/redux/Slice/productSlice';
import Loader from '@/app/components/Loader';
import Error from '@/app/components/Error';

const Product_Component = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetProductsQuery('');
  // fetching the data and dispatching it to array in the product state
  data && dispatch(setProductArray(data));
  const product = useAppSelector((state) => state.product.productItem);
  return (
    <div>
      {isError && <Error />}
      {!isLoading && !isError && (
        <h2 className="text-5xl uppercase font-light p-3">Products</h2>
      )}
      {isLoading && !isError ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {product.map((element: Product) => (
            <ProductCard key={element.id} element={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product_Component;

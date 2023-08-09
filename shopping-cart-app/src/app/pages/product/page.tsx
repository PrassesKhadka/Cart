'use client';
import React from 'react';
import ProductCard from '@/app/components/ProductCard';
import { Product } from '@/app/interface/interfaces';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { useGetProductsQuery } from '@/app/redux/Slice/apiSlice';
import { setProductArray } from '@/app/redux/Slice/productSlice';

const Product_Component = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery('');
  data && dispatch(setProductArray(data));
  const product = useAppSelector((state) => state.product.productItem);
  return (
    <div>
      <h3>Products:</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {product.map((element: Product) => (
          <ProductCard key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Product_Component;

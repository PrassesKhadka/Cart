'use client';
import React from 'react';
import { useGetEachProductQuery } from '@/app/redux/Slice/apiSlice';
import Loader from '@/app/components/Loader';
import ProductDisplay from '@/app/components/ProductDisplay';

interface Prop {
  params: Object;
}
interface Object {
  id: number;
}

const Each_Product = ({ params }: Prop) => {
  const { data, isLoading, isError } = useGetEachProductQuery(params.id);
  return (
    <div>
      {isLoading ? <Loader /> : data && <ProductDisplay element={data} />}
    </div>
  );
};

export default Each_Product;

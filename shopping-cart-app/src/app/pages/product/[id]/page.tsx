'use client';
import React from 'react';
import { useGetEachProductQuery } from '@/app/redux/Slice/apiSlice';
import Loader from '@/app/components/Loader';
import Error from '@/app/components/Error';
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
      {isError && !isLoading ? <Error /> : null}
      {isLoading ? <Loader /> : data && <ProductDisplay element={data} />}
    </div>
  );
};

export default Each_Product;

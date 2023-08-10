'use client';
import React from 'react';
import { useGetEachProductQuery } from '@/app/redux/Slice/apiSlice';
import Loader from '@/app/components/Loader';
import { Product } from '@/app/interface/interfaces';

interface Prop {
  params: Object;
}
interface Object {
  id: number;
}

const Each_Product = ({ params }: Prop) => {
  const { data, isLoading, isError } = useGetEachProductQuery(params.id);
  return <div>{isLoading ? <Loader /> : data && <div>{data.title}</div>}</div>;
};

export default Each_Product;

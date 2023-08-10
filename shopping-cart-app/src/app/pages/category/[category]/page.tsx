'use client';
import ProductCard from '@/app/components/ProductCard';
import { Product } from '@/app/interface/interfaces';
import { useGetCategoryQuery } from '@/app/redux/Slice/apiSlice';
import React from 'react';
import Loader from '@/app/components/Loader';
import Error from '@/app/components/Error';

interface Props {
  params: Object;
}
interface Object {
  category: string;
}

const Category = ({ params }: Props) => {
  const { data, isLoading, isError } = useGetCategoryQuery(params.category);
  return (
    <div>
      {params.category}
      {isError && <Error />}
      {isLoading && !isError ? (
        <Loader />
      ) : (
        data &&
        data.map((element: Product) => {
          return <ProductCard key={element.id} element={element} />;
        })
      )}
    </div>
  );
};

export default Category;

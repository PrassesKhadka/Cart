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
      <h1 className="flex items-center justify-center text-3xl lg:text-5xl uppercase font-light p-3 truncate">
        {params.category.replace(/[%20]/g,' ')}
      </h1>
      <div className="m-3 p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
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
    </div>
  );
};

export default Category;

'use client';
import ProductCard from '@/app/components/ProductCard';
import { Product } from '@/app/interface/interfaces';
import { useGetCategoryQuery } from '@/app/redux/Slice/apiSlice';
import React from 'react';

interface Props {
  params: Object;
}
interface Object {
  category: string;
}

const Category = ({ params }: Props) => {
  const { data } = useGetCategoryQuery(params.category);
  return (
    <div>
      {/* {data.map((element: Product) => {
        return <div>{element.category}</div>;
      })} */}
      {params.category}
      {data &&
        data.map((element: Product) => {
          return <ProductCard key={element.id} element={element} />;
        })}
    </div>
  );
};

export default Category;

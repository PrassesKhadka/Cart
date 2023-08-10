import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getCategory:builder.query({
      query:(category:string)=>`/products/category/${category}`
    }),
    getEachProduct:builder.query({
      query:(id:number)=>`/products/${id}`
    })
  }),
});

export const { useGetProductsQuery,useGetCategoryQuery,useGetEachProductQuery} = api;
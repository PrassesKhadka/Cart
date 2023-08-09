import React from 'react';
import Hero from './ui component/hero';
import Product_Component from './ui component/product';
import axios from 'axios';
import { Product } from './interface/interfaces';

export default async function Home() {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  const products: Product[] = data;
  return (
    <div>
      <Hero />
      <Product_Component products={products} />
    </div>
  );
}

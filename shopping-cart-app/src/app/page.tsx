import React from 'react';
import Hero from './ui component/hero_page';
import Product_Component from './ui component/product_page';
import axios from 'axios';

export default async function Home() {
  const data = await axios.get('https://fakestoreapi.com/products');
  const products = data.data;
  return (
    <div>
      <Hero />
      <Product_Component products={products} />
    </div>
  );
}

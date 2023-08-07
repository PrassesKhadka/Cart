import React from 'react';
import { dummyData } from '../dummy-data/dummy';
import ProductCard from '../components/ProductCard';

const Product_Component = async (props: any) => {
  return (
    <div>
      <h3>Products:</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {props.products.map((element) => (
          <ProductCard key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Product_Component;

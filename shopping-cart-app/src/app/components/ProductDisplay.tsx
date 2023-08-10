import React from 'react';
import { Product } from '../interface/interfaces';

interface Props {
  element: Product;
}

const ProductDisplay = ({ element }: Props) => {
  return <div>{element.id}</div>;
};

export default ProductDisplay;

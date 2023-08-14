import React from 'react';
import { Product } from '../interface/interfaces';
import Image from 'next/image';
import BtnAddToCart from './BtnAddToCart';

interface Props {
  element: Product;
}

const ProductDisplay = ({ element }: Props) => {
  return (
    <div>
      <div className="min-h-[85vh] rounded-sm flex justify-center items-center">
        <div className=" rounded-sm flex justify-center items-start p-3 m-4 flex-col lg:flex-row md:flex-row ">
          <Image
            src={element.image}
            alt={element.title}
            width={300}
            height={300}
            className=""
          ></Image>
          <div className="m-2 ml-12">
            <h1 className="text-3xl font-bold uppercase ">{element.title}</h1>
            <h2 className="font-feather mt-2 mb-2">{element.description}</h2>
            <h3 className="text-xl font-semibold text-green-500 mb-1">
              Price: {element.price} $
            </h3>
            <h4 className="text-xl fon-feather uppercase text-red-500 mb-2">
              {element.category}
            </h4>
            <h4 className="text-xl fon-feather text-blue-500 mb-3">
              {element.rating.rate} ( {element.rating.count} )
            </h4>
            <BtnAddToCart element={element} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

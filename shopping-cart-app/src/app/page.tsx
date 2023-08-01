import React from 'react';
import { dummyData } from './dummy-data/dummy';
import ProductCard from './components/ProductCard';


export default function Home() {
  return <div>
    {dummyData.map((element)=>
      <ProductCard key={element.id} element={element}/>
    )}
  </div>
}

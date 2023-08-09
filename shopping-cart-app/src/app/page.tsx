'use client';
import React, { useEffect } from 'react';
import { useGetProductsQuery } from './redux/Slice/apiSlice';
import Hero from './home/page';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

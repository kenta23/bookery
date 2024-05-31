'use client'

import React, { Suspense, } from 'react'
import SearchQuery from './searchquery';


export default function SearchPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
       <SearchQuery />
    </Suspense>
  );
}


import React, { Suspense, } from 'react'
import SearchQuery from './searchquery';

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
       <SearchQuery />
    </Suspense>
  );
}

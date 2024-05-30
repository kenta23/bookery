'use client'

import load from '@/lib/bookpreview';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect } from 'react'
import { Book } from '@/types';
import Summary from '../summary';
import Bookinfo from '../bookHeader';
import BookHeader from '../bookHeader';
import BookInfo from '../bookInfo';
import Authorinfo from '../authorinfo';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function BookPreview({ data }: { data: Book}) {
    const queryClient = useQueryClient();
    const router = useRouter();

    useEffect(() => {
          async function fetchData() {
            if(data) {
               await queryClient.invalidateQueries({
                 queryKey: ['author']
               })
            }
          }

          fetchData();
    }, [data, queryClient])

    console.log(data);
  return (
    <div className="w-full">
      <ChevronLeft 
              onClick={() => router.back()} 
              size={32} 
              className="my-6 ms-[60px]" 
              cursor={'pointer'}
        />

      {/** BOOK INFO */}
       <BookHeader data={data}/>

      {/**SUMMARY */}
        <Summary data={data}/>

      {/**BOOK INFO */}
       <BookInfo data={data}/>

       {/**AUTHOR INFO */}
       <Authorinfo author={data.volumeInfo.authors}/>
    </div>
  );
}

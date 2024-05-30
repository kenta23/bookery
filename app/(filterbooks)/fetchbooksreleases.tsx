'use client'


import React, { useEffect, useState, useTransition } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { Book } from '@/types'
import { getNewReleasesBooks, paginateNewReleaseBooks } from '@/lib/data'
import Bookdisplaycards from '../components/bookdisplaycards'

export default function FetchBookReleases ( { sortType }: { sortType: string}) {

    const [startIndex, setStartIndex] = useState<number>(0);
    const maxValue: number = 20;
    const queryClient = useQueryClient();
    

    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey:  ['newreleases'],
        queryFn: async() => await paginateNewReleaseBooks(startIndex, sortType),
        staleTime: 10 * 1000 * 60,
    })

    
  
  return (
    <div className="w-full border h-auto">
        <Bookdisplaycards data={data}/>

      {/**PAGINATION */}
         <div className='border mt-[65px] mb-[40px] w-full '>
            <Paginate startIndex={startIndex} setStartIndex={setStartIndex} sort={sortType}/>
         </div>
    </div>
  );
}


export function Paginate({ startIndex, setStartIndex, sort }: {
            startIndex: number, 
            setStartIndex: React.Dispatch<React.SetStateAction<number>>,
            sort: string
  }) {
  const queryClient = useQueryClient();
  const [isPending, startTransition ] = useTransition();

  const { data, mutateAsync, error, isPending: pending } = useMutation({
    mutationFn: async (val: number | string) => await paginateNewReleaseBooks(val, sort),
    mutationKey: ['paginatebook'],
  })

     data && console.log('data',data);
     pending && console.log('isPending', isPending)

     
  function handleCheckValue (e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();
      
      startTransition(() => setStartIndex(Number(e.target.value)));
      
      if(startIndex) {
         mutateAsync(startIndex, {
            onSuccess: () => queryClient.invalidateQueries({ queryKey: [sort] }),
         })
      }
  }


  return (
    <form action="">
      <div className="join ">
        <input
          className={`join-item btn btn-square`}
          type="radio"
          name="options"
          aria-label={isPending ? ".." : "1"}
          value={0}
          checked={startIndex === 0}
          onChange={handleCheckValue}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={isPending ? ".." : "2"}
          value={21}
          checked={startIndex === 21}
          onChange={handleCheckValue}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={isPending ? ".." : "3"}
          value={42}
          checked={startIndex === 42}
          onChange={handleCheckValue}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label={isPending ? ".." : "4"}
          value={63}
          checked={startIndex === 63}
          onChange={handleCheckValue}
          />
      </div>
    </form>
  );
}



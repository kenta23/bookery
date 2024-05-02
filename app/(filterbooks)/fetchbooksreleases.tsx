'use client'


import React, { useState, useTransition } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import { Book } from '@/types'
import { getNewReleasesBooks, paginateNewReleaseBooks } from '@/lib/data'

export default function FetchBookReleases ( { sortType }: { sortType: string}) {

    const [startIndex, setStartIndex] = useState<number>(0);
    const maxValue: number = 20;


    const { data, isLoading, isError, isFetched } = useQuery({
        queryKey: ['newreleases'],
        queryFn: async() => await paginateNewReleaseBooks(startIndex, sortType),
        staleTime: 10 * 1000 * 60,
    })
   
  return (
    <div className="w-full border h-auto">
      <div className="grid grid-cols-4 gap-6 items-start ">    
         {data?.data.items.map((item: Book) => (
          <div key={item.id} className="card mb-0 rounded-none w-[270px] max-h-[370px] bg-white shadow-xl">
            <figure className="w-full min-h-[220px]">
              <Image
                src={item.volumeInfo.imageLinks?.thumbnail}
                alt={item.volumeInfo.title}
                width={400}
                height={300}
                className="size-full h-auto border object-contain"
              />
            </figure>
  
            <div className="card-body mt-0 px-2">
              <h2 className="card-title truncate text-ellipsis">{item.volumeInfo.title}</h2>
  
              <p>{item.volumeInfo.authors}</p>
              <div className="mt-1 flex w-full">
                <button className="p-2 bg-[#726a50] text-white">
                  <p className="text-sm md:text-md lg:text-[15px] font-medium">
                   {item.saleInfo.saleability}
                  </p>
                </button>
              </div>
            </div>
          </div>
         ))}
      </div>

      {/**PAGINATION */}
         <div className='border mt-[65px] mb-[40px] w-full '>
            <Paginate startIndex={startIndex} setStartIndex={setStartIndex} sort={sortType}/>
         </div>
    </div>
  );
}


function Paginate({ startIndex, setStartIndex, sort }: {
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
            onSuccess: () => queryClient.invalidateQueries({ queryKey: ['newreleases'] }),
         })
      }
  }

  console.log('index', startIndex);

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



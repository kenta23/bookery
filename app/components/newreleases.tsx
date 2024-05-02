'use client'

import React from 'react'
import CarouselNewReleases from './carousel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { getNewReleasesBooks } from '@/lib/data'



export default function Newreleases() {

  const { data, isLoading, isError } = useQuery({
    queryFn: getNewReleasesBooks,
    queryKey: ['books-releases'],
    staleTime: 10 * 1000 * 60,
  })


console.log('NEW RELEASES', data);
  return (
    <div className='px-4 md:px-12 lg:px-24 py-6 lg:min-h-[650px] w-full min-w-full'>
          <div className='w-full  space-y-12'>

            <div className='flex min-w-full justify-between items-center'>
            <h1 className='text-lg md:text-[27px] lg:text-[30px] text-secondaryColor font-medium'>New Releases</h1>
             <Link href={'/newreleases'}><p className='text-md text-secondaryColor hover:text-accentColor duration-150 transition-colors ease-in-out md:text-[20px] lg:text-[25px] text-end '>
                 View all</p>
             </Link>
            </div>
            <CarouselNewReleases data={data}/>
          </div>
    </div>
  )
}

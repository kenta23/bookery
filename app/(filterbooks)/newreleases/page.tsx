import React from 'react'
import CarouselMain from '../carousel'
import FetchBookReleases from '../fetchbooksreleases'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "New releases",
    description: "New releases books",
}

export default function Page() {
  return (
    <div className='h-auto mt-[45px] overflow-y-auto w-full px-12'>
         {/**FETCH ALL THE ALL NEW RELEASES BOOK */}
        
        <div className='w-full my-[40px]'>
            <h1 className='text-lg text-center md:text-[27px] lg:text-[30px] text-accentColor font-medium'>New Releases Books</h1>
        </div>
        <FetchBookReleases sortType={'newest'} />
    </div>
  )
}

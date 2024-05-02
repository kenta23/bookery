import React from 'react'
import Navbar from './navbar'
import Hero from './Hero'
import CarouselNewReleases from './carousel'
import Newreleases from './newreleases'
import { useQuery } from '@tanstack/react-query'
import { initialData } from '@/lib/data'
import axios from 'axios';
import Genres from './genres'
import Newsletter from './newsletter'
import Footer from './footer'


export default function Homepage() {

  return (
    <div className='w-full min-w-full h-auto'>
      <div className='min-h-min px-24 py-6 pb-8 bg-gradient-to-br from-[#F6F4DD] to-[#F6DBB2]'>
         <Navbar />
         <Hero /> 

     </div>
         {/**OTHER CONTENTS BELOW */}

         <div className='mt-12 flex w-full lg:max-w-[700px] flex-col items-center space-y-2 text-center py-6 px-4 mx-auto'>
              <h1 className='text-[30px] text-ellipsis font-normal'>
                  New high quality books now accessible in many countries
              </h1>
              <p className='text-[16px] md:text-[20px] text-accentColor font-medium uppercase'>Order Now!</p>
         </div>


        <div className='mt-[40px]'>
           <Newreleases />
        </div>

        {/**GENRES */}
        <div className='mt-[40px]'>
            <Genres />
        </div>

        {/**NEWSLETTER */}
        <div className='mt-[75px] mb-[55px]'>
            <Newsletter />
        </div>

        <Footer />
     </div>
  )
}

'use client'

import Image from 'next/image'
import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useCountUp } from 'react-countup'
export default function Hero() {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }, // you can adjust the duration of the animation here
      }) 
      useCountUp({ ref: 'count', start: 100, end: 200000, delay: 2 });

  return (
    <div className='mt-[75px] mb-[55px] w-full justify-between flex flex-col md:flex-row gap-6 items-center'>
          {/**HERO TEXT HEADLINE */}
         <div className='relative pt-2 pb-12 '>
              <div className='flex  flex-col w-full lg:max-w-[500px] gap-4'>    
                 <h1 className={`text-wrap text-[25px] sm:text-[30px] lg:text-[45px] font-semibold text-darkColor`}>Browse your favorite books online</h1>
                 <p className='text-darkColor text-[16px] sm:text-[18px] lg:text-[20px] font-normal text-wrap'>Access a library of <span id='count' />+ books with great deals available.</p>
              </div>

              <Image 
                src={'/book hero.svg'}
                width={100}
                height={100}
                alt='book'
                quality={120}
                className='absolute left-0 bottom-0'
              />
         </div>


         <div className='py-2 px-4'>
              <div>
                   <Image 
                     src={'/books-group.svg'}
                     width={500}
                     height={500}
                     alt='Books display'
                     className='w-[270px] md:w-[300px] lg:w-[360px] h-auto'
                     priority
                   />
              </div>
         </div>
    </div>
  )
}

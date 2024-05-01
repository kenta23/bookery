'use client'

import Image from 'next/image'
import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export default function Hero() {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }, // you can adjust the duration of the animation here
      }) 


  return (
    <div className='mt-[75px] w-full justify-between flex flex-col md:flex-row gap-6 items-center'>
          {/**HERO TEXT HEADLINE */}
         <div className='relative pt-2 pb-8 px-14'>
              <div className='flex  flex-col w-full lg:max-w-[500px] gap-4'>    
                 <h1 className={`text-wrap text-[35px] lg:text-[50px] font-semibold text-darkColor`}>Browse your favorite books online</h1>
                 <p className='text-darkColor text-[18px] sm:text-[22px] lg:text-[25px] font-normal text-wrap'>Access a library of 200,000+ books with great deals available.</p>
              </div>

              <Image 
                src={'/book hero.svg'}
                width={100}
                height={120}
                alt='book'
                quality={120}
                className='absolute left-5 bottom-1'
              />
         </div>


         <div className='py-4 px-6'>
              <div>
                   <Image 
                     src={'/books-group.svg'}
                     width={450}
                     height={450}
                     alt='Books display'
                     priority
                   />
              </div>
         </div>
    </div>
  )
}

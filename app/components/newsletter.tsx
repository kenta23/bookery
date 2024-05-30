import React from 'react'
import Image from 'next/image'



export default function Newsletter() {
  return (
    <div className='w-full newsletter h-[250px] flex place-items-center px-6'>
    
       {/**NEWSLETTER INPUT */}
      <div className='flex flex-col justify-center md:flex-row items-start gap-8 lg:items-center w-full'>
         <div className='text-white text-[18px] lg:text-[25px] w-full lg:max-w-[55%]  text-wrap'>
             <p>Stay informed about our latest releases Receive book updates by subscribing to our newsletter</p>
         </div>


         <div className='flex flex-col gap-4 sm:block'>
              <input type="text" className='px-4 w-[300px] md:w-[350px] py-3 bg-white outline-none' 
                 placeholder='Enter your email' />
              <button className='px-4 py-3  bg-accentColor text-white ' type='submit'>
                 <p>Subscribe</p>
              </button>
         </div>
        </div>
    </div>
  )
}

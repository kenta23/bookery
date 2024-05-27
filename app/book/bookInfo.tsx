import { Book } from '@/types'
import React from 'react'
import Image from 'next/image'



export default function BookInfo({ data }: { data: Book}) {
  return (
    <div className="mt-[55px] relative w-full border-t-darkColor border-[1px]">
         <div className='text-[#55412F] px-16 py-8 space-y-6 text-pretty'>
               <h1 className="text-[25px]">Book Information</h1>

               <div className='flex flex-col gap-2 items-start'>
                    <p>Publihed Date: <span className='font-medium'>{data.volumeInfo.publishedDate}</span></p>
                    <p>Publisher: <span className='font-medium'>{data.volumeInfo.publisher}</span></p>
                    <p>Rating: <span className='font-medium'>{data.volumeInfo.maturityRating}</span></p>
                    <p>Language: <span className='font-medium'>{data.volumeInfo.language}</span></p>
                    <p>Viewability: <span className='font-medium'>{data.accessInfo.viewability}</span></p>
                    <p>Page Count: <span className='font-medium'>{data.volumeInfo.pageCount}</span></p>
               </div>
         </div>


         
       <Image 
         alt='Book svg'
         width={700}
         height={700}
         src={'/book.svg'}
         className='absolute bottom-2 right-2 size-[100px]'
       />
    </div>
  )
}

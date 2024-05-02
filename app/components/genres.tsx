'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const categories = [
    {
        id: 1,
        name: 'Art',
        image: '/Art.png'
    },
    {
        id: 2,
        name: 'Non-fiction',
        image: '/Non-fiction.png'
    },
    {
        id: 3,
        name: 'Fiction',
        image: '/Fiction.png'
    },
    {
        id: 4,
        name: 'Mystery',
        image: '/Mystery.png'
    }
]
export default function Genres() {

  return (
    <div className='w-full bg-gradient-to-b from-[#F3EFDF] to-[#7C5131] flex items-center justify-center py-24 px-6'> 
          <div className='grid grid-cols-2 gap-16 items-center'>
            {categories.map((category) => (
                <Link href={`/genre/${category.name}`} key={category.id} className='w-[300px] relative bg-slate-200 h-[170px] rounded-lg '>
                     <Image 
                       src={category.image as string}
                       width={100}
                       height={100}
                       className='w-full h-full fill-neutral-800 brightness-50 rounded-lg object-cover'
                       alt={category.name}
                     />

                   <p className='absolute text-center mx-auto my-auto top-1/2  w-full text-white text-[30px]'>{category.name}</p>
                </Link>
            ))}
          </div>
    </div>
  )
}

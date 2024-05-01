'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
    const { data } = useSession();

 return (
    <div className='w-full px-5 mt-2 flex items-center border-[#B5A81D] h-[70px]'>
         <div className='w-full flex gap-4 justify-end items-center'>  
             <Link href={'/'}>
               <p className='text-[#B5A81D]'>Home</p>
             </Link>
            <div>
                  <Image 
                    src={data?.user?.image as string}
                    alt='profile image'
                    width={30}
                    height={30}
                    className='rounded-full'
                  />
            </div>
         </div>
    </div>
  )
}

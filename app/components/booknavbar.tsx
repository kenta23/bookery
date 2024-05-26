'use client'
import { Book, Heart } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

export default function Booknavbar() {
  return (
    <div className="w-full h-[65px] border border-b-white mb-5">
        <div className='flex justify-between items-center gap-2 px-4'>
               {/**LOGO */}
          <Image
            src={"/main logo.svg"}
            alt="Bookery Logo"
            width={700}
            height={700}
            loading="lazy"
            className="size-16"
          />

          <div className='flex justify-between gap-4 items-center'>
            <Book 
               size={24}
               color='#B5A81D'
            />
            <Heart 
               size={24}
               color='#B5A81D'
            />

 {/**USER PROFILE PICTURE */}
            <div className='border-2  rounded-full border-[#B5A81D]'>
               <Image 
                    src={'/no profile.png'}
                    width={500}
                    height={500}
                    className='size-8'
                    alt='profile picture'
                    quality={100}
                    loading='lazy'
                 />
            </div>
          </div>
        </div>
    </div>
  );
}

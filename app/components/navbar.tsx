import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='mx-auto flex px-6 flex-row items-center justify-between  w-full'>
        <Image 
          src={'/main logo.svg'}
          width={100}
          height={100}
          alt='main logo'
        />

         <ul className='flex text-yellow text-[20px] gap-4 items-center'>
              <Link href={'/books'}>
                <li className='font-medium'>Books</li>
              </Link>
              <Link href={'/about'}>
                <li className='font-medium'>About</li>
              </Link>
              <Link href={'/sign-in'}>
                <li className='font-medium'>Sign in</li>
              </Link>
         </ul>
    </div>
  )
}

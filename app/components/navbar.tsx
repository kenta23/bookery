'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UserButton from './UserButton'


export default function Navbar() {
   const pathname = usePathname();

   
  return (
    <div className="mx-auto flex px-0 md:px-6 flex-row items-center justify-between  w-full">
      <Link href={"/"} role='button'>
        <Image
          src={"/main logo.svg"}
          width={100}
          height={100}
          alt="main logo"
          className="size-20"
        />
      </Link>

      <ul className="flex text-yellow text-[20px] gap-4 items-center">
        {pathname === "/books" ? (
          <Link href={"/"} className="text-lg">
            <li className="font-medium">Home</li>
          </Link>
        ) : (
          <Link href={"/books"} className="text-lg">
            <li className="font-medium">Books</li>
          </Link>
        )}

        <Link href={"/favorites"} className="text-lg">
          <li className="font-medium">Favorites</li>
        </Link>

        {/**USER PROFILE PICTURE */}
        
            <UserButton />
      </ul>
    </div>
  );
}

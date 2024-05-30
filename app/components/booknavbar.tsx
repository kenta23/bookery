'use client'

import { Book, Heart } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import UserButton from './UserButton';

export default function Booknavbar() {
   const session = useSession();
   const pathname = usePathname();

  return (
    <div className="w-full px-1  sm:px-4 h-auto py-1 border border-b-[#e7b291] mb-5">
      <div className="flex justify-between items-center gap-2 px-4">
        {/**LOGO */}
        <Image
          src={"/main logo.svg"}
          alt="Bookery Logo"
          width={1000}
          height={1000}
          loading="lazy"
          className="size-12 sm:size-20"
        />

        <div className="flex justify-between gap-2 sm:gap-4 items-center">
          <Link href={"/"} role="link" content="Home">
            <span className="text-[#B5A81D] text-sm sm:text-md md:text-lg">Home</span>
          </Link>
          {pathname === '/newreleases' && <Link href={"/books"} role="link" content="books">
            <span className="text-[#B5A81D] text-sm sm:text-md md:text-lg">Books</span>
          </Link>}
          
          <Link
            href={`${pathname === "/favorites" ? "/books" : "/favorites"}`}
            role="link"
            content="favorites"
          >
            <span className="text-[#B5A81D] text-sm sm:text-md md:text-lg">
              {pathname === "/favorites" ? "Books" : "Favorites"}
            </span>
          </Link>
          

          {/**USER PROFILE PICTURE */}
            <UserButton />
        </div>
      </div>
    </div>
  );
}

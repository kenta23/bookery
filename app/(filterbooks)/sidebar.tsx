'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ArrowDownUp } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const filters = [
    {
       id: 1,
       name: 'partial Free',
    },

    {
     id: 2,
     name: 'Free',
    },
    {
        id: 3,
        name: 'Free-Ebook'
    },
    {
        id: 4,
        name: 'Paid-Ebook'
    },
    {
        id: 5,
        name: 'Ebook'
    }
]
export default function Sidebar() {
  const pathname = usePathname();


  return (
    <div className="min-h-screen overflow-y-hidden px-3 py-2 top-0 w-[250px] bg-[#414037]">
      <div className=" mx-auto self-center">
        <Image
          src={"logo no text.svg"}
          alt="Bookery Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      {/**GENRES */}
      <div className="mt-2 border-b-2 pb-3 border-b-white">
        <div className="space-y-3">
          <h1 className="text-[#D7CC50] text-[25px]">Genre</h1>

          <form action="w-full">
            <div className="flex ms-3 items-center text-white space-x-2">
              <Checkbox id="terms" className="border-white" />
              <label
                htmlFor="terms"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Adventrue
              </label>
            </div>
          </form>
        </div>
      </div>

      {/**FILTERS */}
      <div className="mt-2 border-b-2 pb-3 border-b-white">
        <div className="space-y-3">
          <h1 className="text-[#D7CC50] text-[25px]">Filter</h1>

          <form action="w-full">
            {filters.map((filter) => (
                 <div key={filter.id} className="flex ms-3 items-center text-white space-x-2 space-y-3">
                  <Checkbox id="terms"  className="border-white " />
                  <label
                    htmlFor="terms"
                    className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {filter.name}
                  </label>
                </div>
            ))}
          </form>
        </div>
      </div>


      {/**SORT */}
      <div className="mt-2 border-b-2 pb-3 border-b-white">
          <div className='space-y-3'>
              <h1 className="text-[#D7CC50] text-[25px]">Sort</h1>

              <div aria-disabled={pathname === '/newreleases'} className="flex ms-3 items-center text-white space-x-2 space-y-3">
              <ArrowDownUp size={20} className={`${pathname === '/newreleases' ? 'text-[#bb8e63]' : 'text-white'}`}/>
                <Link
                    href={'/newreleases'}
                    aria-selected={pathname === '/newrelease'}
                    className={cn(`text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, 
                       pathname === '/newreleases' ? 'text-[#bb8e63]' : '')}
                  >
                    Newest
                  </Link>
              </div>
              <div aria-disabled={pathname === '/oldreleases'} className="flex ms-3 items-center text-white space-x-2 space-y-4">
                <ArrowDownUp size={20} className={`${pathname === '/oldreleases' ? 'text-[#bb8e63]' : 'text-white'}`}/>
                <Link
                    href={'/oldreleases'}
                    aria-selected={pathname === '/oldreleases'}
                    className={cn(`text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, 
                       pathname === '/oldreleases' ? 'text-[#bb8e63]' : '')}
                  >
                    Oldest
                  </Link>
              </div>
          </div>
      </div>

      {/**CATEGORIES */}
    </div>
  );
}

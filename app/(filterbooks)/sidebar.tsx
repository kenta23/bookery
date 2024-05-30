'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { ArrowDownUp } from 'lucide-react';
import Image from 'next/image'
import React, { useCallback } from 'react'
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { title } from 'process';


const filters = [
    {
       id: 1,
       title: 'Partial free',
       name: 'partial',
    },

    {
     id: 2,
     title: 'Free',
     name: 'full'
    },
    {
        id: 3,
        title: 'Free-ebook',
        name: 'free-ebooks'
    },
    {
        id: 4,
        title: 'Paid-ebook',
        name: 'paid-ebooks'
    },
    {
        id: 5,
        title: 'Ebook',
        name: 'ebooks'
    }
]


export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const startIndex = searchParams.get('startIndex') ? parseInt(searchParams.get('startIndex')!, 10) : 0;
  const maxResults = searchParams.get('maxResults');
  const orderBy = searchParams.get('orderBy');
  const router = useRouter();
  const queryClient = useQueryClient();

  
  async function handleSubmit (filtername: string) {
      let queryUrl;

       if(pathname.startsWith('/newreleases')) {
           queryUrl = `${pathname}/?q=${'newreleases'}&startIndex=${startIndex}&maxResults=40&orderBy=${'newest'}&filter=${filtername}`;
           
           queryClient.invalidateQueries({
            queryKey: ['newreleases'],
           })      
        }
       else {
          queryUrl = `${pathname}/?q=${query}&startIndex=${startIndex}&maxResults=40&orderBy=${orderBy}&filter=${filtername}`;      
       } 

       queryClient.invalidateQueries({
        queryKey: ['searchbook'],
       })
       router.push(queryUrl);
  }

  function handleSort(sort: string) { 
    queryClient.invalidateQueries({
       queryKey: ['searchbook']
    });
     router.push(`${pathname}/?q=${query}&startIndex=${startIndex}&maxResults=40&orderBy=${sort}`);
  }
  
  return (
    <div className="min-h-screen overflow-y-hidden px-1 sm:px-3 py-2 
      top-0 w-[250px] bg-[#414037]">
      <div className=" mx-auto self-center">
        <Image
          src={"logo no text.svg"}
          alt="Bookery Logo"
          width={200}
          height={200}
          priority
          className='size-[120px] sm:size[250px]'
        />
      </div>

     
      {/**FILTERS */}
      <div className="mt-2 border-b-[1px] pb-3 border-b-white">
        <div className="space-y-3">
          <h1 className="text-[#D7CC50] text-[18px] sm:text-[25px]">Filter</h1>

          <RadioGroup className='flex flex-col ms-3 items-start text-white space-y-2' defaultValue={filters[0].title}>
            {filters.map((filter) => (
              <div
                key={filter.id}
                className="flex items-center text-white space-x-2"
              >
                <RadioGroupItem
                  value={filter.name}
                  onClick={() => handleSubmit(filter.name)}
                  className="text-white border-white border-[1px]"
                  id={filter.title}
                />
                <label htmlFor={filter.title} className='text-sm sm:text-md md:text-lg'>{filter.title}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/**SORT */}
      <div className="mt-2 border-b-[1px] pb-3 border-b-white">
        <div className="space-y-3">
          <h1 className="text-[#D7CC50] text-[18px] sm:text-[25px]">Sort</h1>
          <div
            className="flex ms-3 items-center text-white space-x-2 space-y-3"
          >
            <ArrowDownUp
              size={20}
              className={`${
                orderBy === "newest" ? "text-[#bb8e63]" : "text-white"
              }`}
            />
            <button
              onClick={() => handleSort('newest')}
              className={cn(
                `text-sm sm:text-md md:text-lg cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, {
                    "text-[#bb8e63]": orderBy === 'newest'
                }
              )}
            >
              Newest
            </button>
          </div>


          <div
            className="flex ms-3 items-center text-white space-x-2 space-y-3"
          >
            <ArrowDownUp
              size={20}
              className={`${
                orderBy === "relevance" ? "text-[#bb8e63]" : "text-white"
              }`}
            />
            <button
              onClick={() => handleSort('relevance')}
              className={cn(
                `text-sm sm:text-md md:text-lg cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, {
                    "text-[#bb8e63]": orderBy === 'relevance'
                }
              )}
            >
              Relevance
            </button>
          </div>
          {/**  <div aria-disabled={pathname === '/oldreleases'} className="flex ms-3 items-center text-white space-x-2 space-y-4">
                <ArrowDownUp size={20} className={`${pathname === '/oldreleases' ? 'text-[#bb8e63]' : 'text-white'}`}/>
                <Link
                    href={'/oldreleases'}
                    aria-selected={pathname === '/oldreleases'}
                    className={cn(`text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`, 
                       pathname === '/oldreleases' ? 'text-[#bb8e63]' : '')}
                  >
                    Oldest
                  </Link>
              </div> */}
        </div>
      </div>

      {/**CATEGORIES */}
    </div>
  );
}

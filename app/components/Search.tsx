'use client'

import { queryBook } from '@/lib/data'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect, usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Search() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const query = formData.get('search');

        queryClient.invalidateQueries({ queryKey: ['searchbook'] })
        router.push(`/search?q=${query}&startIndex=${0}&maxResults=40&orderBy=relevance&filter=partial`)
         
    } 

  return (
    <div className="w-full relative h-auto">
      <Image
        src={"/slide 1.png"}
        width={1200}
        height={1200}
        alt="Cover"
        className="w-auto md:w-full h-[500px] md:h-[550px] object-cover"
      />

      <div className='flex items-center flex-col absolute w-auto mx-auto space-y-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className="w-full border-b-[1px] border-b-orange-400 py-3 px-4">
          <h1 className="text-[30px] text-center md:text-[40px] lg:text-[50px] text-white font-medium">
            Search any book you like
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center"
        >
          <input
            type="text"
            placeholder="Seach a book"
            className="input rounded-none input-bordered w-[340px] md:w-[400px] lg:w-[500px] bg-white"
            name="search"
          />
          <button type="submit" className="px-3 py-3 bg-accentColor ">
            <SearchIcon size={24} className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}

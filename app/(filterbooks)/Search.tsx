'use client'

import { queryBook } from '@/lib/data'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Search() {
    const queryClient = useQueryClient();
    const [value, setValue] = useState<string>('');
    const router = useRouter();
    const {data, mutate } = useMutation({
       mutationKey: ['search'],
       mutationFn: async (formdata: FormData) => queryBook(formdata)
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('CURRENT TARGET', e.currentTarget);

        const formData = new FormData(e.currentTarget);
        const query = formData.get('search');

        queryClient.invalidateQueries({ queryKey: ['searchbook'] })
        router.push(`/search?q=${query}&startIndex=${0}&maxResults=40&orderBy=newest&filter=partial`)
         
    } 

  return (
     <div className='w-full relative h-auto'>   
             <Image 
               src={'/slide 1.png'}
               width={500}
               height={200}
               alt='Cover'
               className='w-full h-[400px] object-cover'
             />
         
          <form onSubmit={handleSubmit} className='flex items-center absolute top-12 left-[50%] translate-x-[-50%]'>
             <input 
                 type="text"
                 placeholder="Seach a book" 
                 className="input rounded-none input-bordered w-[500px] bg-white" 
                 name='search'
                 />
              <button type='submit' className='px-3 py-3 bg-accentColor '>
                  <SearchIcon 
                    size={24}
                    className='text-white'                  
                  />
              </button>
          </form>
     </div>
  )
}

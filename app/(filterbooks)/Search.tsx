import { queryBook } from '@/lib/data'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useRef } from 'react'

export default function Search() {

  return (
     <div className='w-full relative h-auto'>   
             <Image 
               src={'/slide 1.png'}
               width={500}
               height={200}
               alt='Cover'
               className='w-full h-[400px] object-cover'
             />
         
          <form action={async (formData: FormData) => {
              "use server"
              const query = formData.get('search')?.toString();
              // return await axios.post(`${BASE_URL}?q=${query?.toString}&startIndex=${0}&maxResults=40&orderBy=newest`);
               return redirect(`/search?q=${query}&startIndex=${0}&maxResults=40&orderBy=newest`);
        }
          }  className='flex items-center absolute top-12 left-[50%] translate-x-[-50%]'>
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

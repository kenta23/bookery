import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
         
          <div className='flex items-center absolute top-12 left-[50%] translate-x-[-50%]'>
          <input type="text" placeholder="Seach a book" className="input rounded-none input-bordered w-[500px] bg-white" />
              <button className='px-3 py-3 bg-accentColor '>
                  <SearchIcon 
                    size={24}
                    className='text-white'
                    
                  />
              </button>
          </div>
     </div>
  )
}

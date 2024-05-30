import { Book } from '@/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { getAuthorInfo } from '@/lib/data'



export default function Authorinfo({ author }: { author: any }) { 
     const { data, isPending, isError } = useQuery({
         queryKey: ['author'],
         queryFn: async () => getAuthorInfo(author),
         staleTime: 60 * 2 * 1000
     })

     console.log('data', data)
    // console.log('author', author[0].replace(/\s+/g, '+').toLowerCase());

     const [profile, setProfile] = useState<string>('');
 
     console.log('AUTHOR PROFILE',profile)
     console.log('KEY', data?.docs[0].key);


     useEffect(() => {
       async function getAuthorImage() {
         try {
           const image = await axios.get(
             `https://covers.openlibrary.org/a/olid/${data?.docs[0].key.toString()}-M.jpg`,
             {
               responseType: "blob",
             }
           );

           const imageData = URL.createObjectURL(image.data);
           console.log("IMAGE", image);

           setProfile(imageData);
         } catch (error) {
           console.log(error);
         }
       }
       
       if(data?.docs[0].key) {
           getAuthorImage()
       }
     }, [data?.docs]);

  return (
    <div className="mt-[55px] relative w-full bg-[#E2DDAB] py-10 px-12">
          <div className='flex flex-row gap-12 items-start'>
              <Image 
                 alt='authors image'
                 width={1000}
                 height={1000}
                 className='rounded-full object-cover size-[120px]'
                 src={profile || '/no profile.png'}
               />

               <div className='flex items-start flex-col gap-1'>
                    <h1 className='text-[30px] text-accentColor'>{data?.docs[0].name}</h1>
                   {data?.docs[0].alternate_names && <p className='text-darkColor text-[18px] font-medium'>Alternative name: {data?.docs[0].alternate_names && data?.docs[0].alternate_names.map((name: string, id: number) => (        
                            <span className='text-[#795c27]' key={id}>{ name || 'N/A'} </span>        
                    ))}</p>}
                    {data?.docs[0].birth_date && <p className='text-darkColor text-[18px] font-medium'>Birthdate: <span>{data?.docs[0].birth_date}</span></p>}
                    <p className='text-darkColor text-[18px] font-medium'>{data?.docs[0]?.type}</p>

                    {data?.docs[0]?.top_subjects &&<p className='text-[18px] text-darkColor font-medium'>Top subjects: {data?.docs[0]?.top_subjects.map((subject: string, id: number) => (
                      <span className='font-normal text-yellow' key={id}>{subject} </span>
                    ))}</p>}
               </div>
          </div>
    </div>
  )
}

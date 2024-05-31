'use client'

import Bookdisplaycards from '@/app/components/bookdisplaycards';
import { queryBook } from '@/lib/data';
import { BASE_URL } from '@/lib/utils';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Paginate } from '../fetchbooksreleases';
import PaginateSearch from './paginateSearch';


export default function SearchQuery() {
  const params = useSearchParams();
  const searchterm = params.get('q') || '';
  const startIndex = params.get('startIndex') ? parseInt(params.get('startIndex')!, 10) : 0;
  const filter = params.get('filter');
  const orderBy = params.get('orderBy') || 'newest';
  const [newStartIndex, setNewStartIndex] = useState<number>(startIndex);
  const queryClient = useQueryClient();
  
  //append some query params if needed like genres and filters
  //INITIAL DATA
  const { data, isPending } = useQuery({
    queryKey: ['searchbook'],
    queryFn:  async () => await axios.get(`${BASE_URL}?q=${searchterm}&startIndex=${newStartIndex}&maxResults=40&orderBy=${orderBy}&filter=${filter ? filter : 'partial'}`),
    staleTime: 60 * 5 * 1000,
    _optimisticResults: 'optimistic'
  })


  useEffect(() => {
     queryClient.invalidateQueries({ queryKey: ['searchbook'] })
  }, [queryClient, searchterm])

  

   return (
     <div className="h-auto mt-[45px] overflow-y-auto w-full px-12">
       {/**FETCH ALL THE ALL NEW RELEASES BOOK */}

       <div className="w-full my-[40px]">
         <h1 className="text-lg text-center md:text-[27px] lg:text-[30px] text-accentColor font-medium">
           Search Results
         </h1>
       </div>
        
          {isPending ? <p>Loading</p> : <Bookdisplaycards data={data}/>}

         <div className='border mt-[65px] mb-[40px] w-full'> 
             <PaginateSearch 
                startIndex={newStartIndex} 
                setNewStartIndex={setNewStartIndex} 
                searchterm={searchterm}
              />
         </div>
     </div>
   );
}

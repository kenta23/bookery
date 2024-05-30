'use client'

import { BASE_URL } from '@/lib/utils';
import { Book } from '@/types';
import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Bookdisplaycards from '../components/bookdisplaycards';


export default function Favorites() {
  {
    /**RENDER ALL FAVORITE BOOKS DEPEND ON USER ID */
  }
  const { data: favoriteBooks, isPending, isError } = useQuery({
    queryKey: ["favoriteBooks"],
    queryFn: async () => await axios.get("/api/bookdata"),
    staleTime: 2 * 60 * 1000
  }); 
  
  const router = useRouter();
  

  const { data, error, pending } = useQueries({
        queries: favoriteBooks?.data.map((book: { bookId: any }) => ({
        queryKey: ["bookid", book.bookId],
        queryFn: async () => await axios.get(`${BASE_URL}/${book.bookId}`),
        staleTime: 2 * 60 * 1000,
      })) || [],
    combine: (result) => {
      return {
        data: result.map((res) => res.data) as Book[],
        pending: result.map((res) => res.isPending),
        error: result.map((res) => res.isError),
      };
    },
  });

  console.log("MY favoriteBooks", favoriteBooks);
  console.log("MY ALL BOOKS DATA COMBINED", data);

  
  return (
    <div className="">
      <ChevronLeft
        onClick={() => router.back()}
        size={32}
        className="my-6 " 
        cursor={"pointer"}
      />

      <h1 className="md: text-[40px]  text-accentColor font-medium">
        Favorites
      </h1>

      <div className="mt-10">
        {isPending && <p>Loading...</p>}
        {isError && <p>Error loading favorite books.</p>}

        {data.every((item) => item !== undefined) &&
           <Bookdisplaycards data={data}/>
        }
      </div>
    </div>
  );
}

import { queryBook } from '@/lib/data';
import { BASE_URL } from '@/lib/utils';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useState, useTransition } from 'react'


export default function PaginateSearch({ startIndex, searchterm, setNewStartIndex }: {
    startIndex: number,
    searchterm: string,
    setNewStartIndex: React.Dispatch<React.SetStateAction<number>>,
}) {
 
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const queryClient = useQueryClient();
 

  async function handleSubmit (e: React.ChangeEvent<HTMLInputElement>) {
      e.preventDefault();

      setNewStartIndex(Number(e.target.value))
      const queryUrl = `${pathname}/?q=${searchterm}&startIndex=${e.target.value}&maxResults=40&orderBy=${'newest'}`;
 
       await queryClient.invalidateQueries({ queryKey: ['searchbook'] })

       router.push(queryUrl);    
    }

 return (
    <form> 
      <div className="join">
        <input
          className={`join-item btn btn-square`}
          type="radio"
          name="options"
          aria-label="1"
          value={0}
          onChange={handleSubmit}
          checked={startIndex === 0}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
          value={21}
          onChange={handleSubmit}
          checked={startIndex === 21}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
          value={42}
          onChange={handleSubmit}
          checked={startIndex === 42}
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
          value={63}
          onChange={handleSubmit}
          checked={startIndex === 63}
        />
      </div>
    </form>
  );
}


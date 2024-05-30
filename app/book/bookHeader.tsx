import { Book } from '@/types'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Image from 'next/image';
import { BookOpenText, Heart, Slash } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToFavorites } from '../actions/bookdata';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import axios from 'axios';
import { Check } from 'lucide-react';


export default function BookHeader({ data }: { data: Book}) {

    const { data: isFavorite } = useQuery({
       queryKey: ['isFavorite', data.id],
       queryFn: async () => await axios.get('/api/favorite', {
        params: { bookId: data.id }
      }),
       enabled: !!data.id, 
       staleTime: 5 * 60 * 1000 //5 minutes
    })

    const { isSuccess, mutate, data: response } = useMutation({
      mutationKey: ['deletebook'],
      mutationFn: async (id: string) => await addToFavorites(id) 
    })

  const { toast } = useToast();
  const queryClient = useQueryClient();

   async function handleSubmit () {
         mutate(data.id, {
            onSuccess: () => {
              toast({ 
                title: isFavorite?.data ? 'Book removed from favorites' : 'Book added to favorites',
                duration: 2000,
                variant: 'default',
             }),
             queryClient.invalidateQueries({
               queryKey: ['isFavorite', data.id, ]
             })

             queryClient.invalidateQueries({
              queryKey: ['favoriteBooks']
            })
            },
            onError: () => {
                toast({
                    title: 'Something went wrong',
                    description: "there was a problem in your request",
                    variant: 'destructive',
                    action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
            }
         })
   } 

   console.log('MY FAVORITES', isFavorite?.data);
  
  return (
    <div className="flex w-full flex-row gap-4 justify-around items-center">
      <div className="flex flex-col gap-2">
        {/**BREADCRUMBS */}
        <Breadcrumb>
          <BreadcrumbList className="text-gray-600">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/books">Books</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-[240px] truncate">
                {data.volumeInfo.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/**Display book image */}
        <div className="shadow-md mt-2 border p-1 w-fit flex items-center gap-4 h-auto">
          <div className="flex flex-col gap-2">
            <Image
              src={data.volumeInfo.imageLinks.smallThumbnail}
              height={500}
              width={500}
              alt="Book image"
              quality={100}
              className="h-[140px] w-[120px] object-cover"
            />
            <Image
              src={data.volumeInfo.imageLinks.medium}
              height={500}
              width={500}
              alt="Book image"
              quality={100}
              className="h-[140px] w-[120px] object-cover"
            />
            <Image
              src={data.volumeInfo.imageLinks.small}
              height={500}
              width={500}
              alt="Book image"
              quality={100}
              className="h-[140px] w-[120px] object-cover"
            />
          </div>

          <Image
            src={data.volumeInfo.imageLinks.extraLarge}
            height={500}
            width={500}
            alt="Book image"
            quality={100}
            className="h-[460px] w-[458px] object-cover"
          />
        </div>
      </div>

      {/**BOOK TITLE AND OTHERS */}
      <div className="flex flex-col gap-8 items-start w-auto min-w-[300px] max-w-[450px] h-auto">
        <div className="flex flex-col gap-2">
          <h1
            className={cn("text-[#DF4E1E] text-[38px]", {
              "text-[28px]": data.volumeInfo.title.length >= 100,
            })}
          >
            {data.volumeInfo.title}
          </h1>
          {data.volumeInfo.authors ? (
            data.volumeInfo.authors.map((author, i) => (
              <p
                key={i}
                className="text-darkColor w-fit font-medium text-[20px]"
              >
                {author.trimEnd()}
              </p>
            ))
          ) : (
            <p className="text-darkColor w-fit font-medium text-[20px]">
              {data.volumeInfo.authors}
            </p>
          )}

          {/**PRICE */}
          {data.saleInfo.buyLink ? (
            <p className="text-lg text-[#8a712f] font-medium">
              {`${data.saleInfo.listPrice?.currencyCode} ${data.saleInfo.listPrice?.amount}`}
            </p>
          ) : (
            <p className="text-lg font-medium text-[#8a712f]">NOT FOR SALE</p>
          )}
          <p className="text-darkColor">Country: {data.accessInfo.country}</p>
        </div>

        {/**CTA BUTTONS */}
        <div className="flex gap-4 items-center">
          <Link
            target="_blank"
            role="button"
            href={`https://books.google.com.ph/books?id=${data.id}&printsec=frontcover#v=onepage&q&f=false`}
            className="bg-[#D7CC50] shadow-md shadow-gray-200 text-white flex gap-3 hover:bg-[#e6db6c] hover:text-white duration-150 ease-in-out transition-colors items-center rounded-lg px-4 py-3 min-w-[170px]"
          >
            <BookOpenText size={24} />
            <span className="text-[20px]">Preview</span>
          </Link>

          {data.saleInfo.buyLink && (
            <Link
              role="button"
              href={data.saleInfo.buyLink}
              className="border-[#ca5f3e] shadow-md shadow-gray-200 border-2 text-[#ca5f3e] hover:bg-[#ca5f3e] hover:text-white duration-150 ease-in-out transition-colors flex gap-3 items-center rounded-lg px-4 py-3 "
            >
              <span className="text-[20px]">Purchase</span>
            </Link>
          )}
          {/**ADD TO FAVORITES FUNCTION */}
          <Heart
            size={40}
            cursor={"pointer"}
            className={cn(
              `hover:scale-110  transition-all duration-150 ease-linear`,
              isFavorite?.data
                ? "fill-[#DF4E1E] text-[#DF4E1E]"
                : "text-[#DF4E1E] "
            )}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

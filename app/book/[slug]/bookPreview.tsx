'use client'

import load from '@/lib/bookpreview';
import { BookOpenText, ChevronLeft, Heart, Slash } from 'lucide-react';
import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image';
import { Book } from '@/types';
import { cn } from '@/lib/utils';
import BookDescription from '@/app/components/bookdescription';

export default function BookPreview({ data }: { data: Book}) {
  
  return (
    <div className="w-full">
      <ChevronLeft size={32} className="my-4" />

      {/** BOOK INFO */}
      <div className="flex w-full flex-row gap-4 justify-around">
        <div className="flex flex-col gap-2">
          {/**BREADCRUMBS */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/newreleases">
                  New Releases
                </BreadcrumbLink>
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
              className={cn(
                "text-[#DF4E1E]",
                data.volumeInfo.title.length >= 100
                  ? "text-[28px]"
                  : "text-[38px]"
              )}
            >
              {data.volumeInfo.title}
            </h1>
            {data.volumeInfo.authors.map((author, i) => (
              <p key={i} className="text-darkColor font-medium text-[20px]">
               {data.volumeInfo.authors[i].trim()} 
              </p>
            ))}

            {/**PRICE */}
            {data.saleInfo.buyLink ? (
              <p className='text-lg text-[#8a712f] font-medium'>
                {data.saleInfo.listPrice?.currencyCode}{" "}
                {data.saleInfo.listPrice?.amount}
              </p>
            ) : (
              <p className='text-lg font-medium p-2 w-fit text-[#8a712f]'>NOT FOR SALE</p>
            )}
          </div>

          {/**CTA BUTTONS */}
          <div className="flex gap-4 items-center">
            <button className="bg-[#D7CC50] text-white flex gap-3 items-center rounded-lg px-4 py-3 min-w-[170px]">
              <BookOpenText size={24} />{" "}
              <span className="text-[20px]">Preview</span>
            </button>

            {data.saleInfo.buyLink &&
               <button className="border-[#D7CC50] border-2 text-[#D7CC50] flex gap-3 items-center rounded-lg px-4 py-3 ">
               <span className="text-[20px]">Purchase</span>
              </button> }
            <Heart size={40} cursor={"pointer"} className="text-[#DF4E1E]" />
          </div>
        </div>
      </div>



      {/**SUMMARY */}

      <div className='mt-[55px] w-full border-t-darkColor border-[1px]'>
           <div className='text-[#55412F] px-16 py-8 flex flex-col gap-2 text-pretty'>
              <h1 className='text-[25px]'>Summary</h1>
              
              <BookDescription description={data.volumeInfo.description}/>
           </div>
      </div>
    </div>
  );
}

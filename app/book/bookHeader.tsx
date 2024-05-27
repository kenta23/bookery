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


export default function BookHeader({ data }: { data: Book}) {
  return (
    <div className="flex w-full flex-row gap-4 justify-around items-center">
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
              <BreadcrumbLink href="/newreleases">New Releases</BreadcrumbLink>
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
          <Heart size={40} cursor={"pointer"} className="text-[#DF4E1E]" />
        </div>
      </div>
    </div>
  );
}

'use client'

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { BASE_URL } from "@/lib/utils";
import { getNewReleasesBooks } from "@/lib/data";
import { Book } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function CarouselNewReleases({ data }: { data: any}) {
  const router = useRouter();

    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {data?.data.items.map((book: Book) => (
            <CarouselItem onClick={() => router.push(`/book/${book.id}`)} key={book.id} className="md:basis-1/2 cursor-pointer lg:basis-1/4">
              <div className="p-1 ">
                <Card className="max-w-full">   
                   {/**BOOK THUMBNAIL */}
                   <div className="w-full border h-[200px]">
                      <Image  
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title + " thumbnail"}
                        width={500}
                        height={500}
                        className="size-full object-cover"
                      />
                   </div>
                  <CardContent className="flex flex-col min-h-[220px] h-auto mt-[20px] border items-start justify-start p-2">
                        {/**BOOK TITLE AND AUTHOR */}
                          <div className="flex w-full break-words text-wrap flex-col gap-2 items-start">
                               <h2 className="text-[20px] font-medium ">{book.volumeInfo.title}</h2>
                               <h3 className="text-[19px] text-gray-500">{book.volumeInfo.authors}</h3>
                          </div>

                          <div className="border mt-2 flex w-full">
                             <button className="p-2 bg-[#af8b12] text-white">
                              <p className="text-sm md:text-md lg:text-[15px] font-medium">{book.saleInfo.saleability}</p>
                             </button>
                          </div>
                  </CardContent>


                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }
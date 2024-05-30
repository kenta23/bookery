import React from 'react'
import Image from 'next/image'
import { Book } from '@/types'
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Bookdisplaycards({ data }: { data: any }) {
  const pathname = usePathname();


  console.log('BOOK DATA', data)

  return (
    <div className="grid grid-cols-1 
        md:grid-cols-2 lg:grid-cols-4 gap-2 
        md:gap-6 items-start">
      {pathname !== '/favorites' ? (
        <>
          {data?.data.items.map((book: Book) => (
            <Link role="main" href={`/book/${book.id}`} className="p-1" key={book.id}>
              <Card className="max-w-full">
                {/** BOOK THUMBNAIL */}
                <div className="w-full h-[250px]">
                  <Image
                    src={book.volumeInfo.imageLinks?.thumbnail}
                    alt={`${book.volumeInfo.title} thumbnail`}
                    width={1000}
                    height={1000}
                    className="size-full object-contain"
                  />
                </div>
                <CardContent className="flex flex-col min-h-[200px] h-auto max-h-[400px] mt-[20px] border items-start justify-start p-2">
                  {/** BOOK TITLE AND AUTHOR */}
                  <div className="flex w-full break-words text-wrap flex-col gap-1 items-start">
                    <h2 className="text-[18px] font-medium text-wrap max-h-[60px] truncate">
                      {book.volumeInfo.title}
                    </h2>
                    <h3 className="text-[14px] text-gray-500">{book.volumeInfo.authors}</h3>
                  </div>
                  <div className="mt-2 flex w-full">
                    <button
                      className={cn(
                        'p-2 text-white',
                        book.saleInfo.saleability === 'FOR_SALE' ? 'bg-[#af8b12]' : 'bg-[#726a50]'
                      )}
                    >
                      <p className="text-sm md:text-md lg:text-[15px] font-medium">
                        {book.saleInfo.saleability}
                      </p>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </>
      ) : (
        <> 
          {data?.map((book: any) => (
            <Link role="main" href={`/book/${book.data.id}`} className="p-1" key={book.data.id}>
              <Card className="max-w-full">
                {/** BOOK THUMBNAIL */}
                <div className="w-full h-[250px]">
                  <Image
                    src={book.data.volumeInfo.imageLinks?.thumbnail}
                    alt={`${book.data.volumeInfo.title} thumbnail`}
                    width={1000}
                    height={1000}
                    className="size-full object-contain"
                  />
                </div>
                <CardContent className="flex flex-col min-h-[200px] h-auto max-h-[400px] mt-[20px] border items-start justify-start p-2">
                  {/** BOOK TITLE AND AUTHOR */}
                  <div className="flex w-full break-words text-wrap flex-col gap-1 items-start">
                    <h2 className="text-[18px] font-medium text-wrap max-h-[60px] truncate">
                      {book.data.volumeInfo.title}
                    </h2>
                    <h3 className="text-[14px] text-gray-500">{book.data.volumeInfo.authors}</h3>
                  </div>
                  <div className="mt-2 flex w-full">
                    <button
                      className={cn(
                        'p-2 text-white',
                        book.data.saleInfo.saleability === 'FOR_SALE' ? 'bg-[#af8b12]' : 'bg-[#726a50]'
                      )}
                    >
                      <p className="text-sm md:text-md lg:text-[15px] font-medium">
                        {book.data.saleInfo.saleability}
                      </p>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </>
      )}

    </div>
  );
}

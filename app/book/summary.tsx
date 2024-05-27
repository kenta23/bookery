import { Book } from '@/types'
import React from 'react'
import BookDescription from '../components/bookdescription'
import Image from 'next/image';

export default function Summary({ data }: { data: Book}) {
  return (
    <div className="mt-[55px] w-full border-t-darkColor border-[1px]">
      <div className="text-[#55412F] px-16 py-8 space-y-6 text-pretty">
        <h1 className="text-[25px]">Summary</h1>
        <BookDescription description={data.volumeInfo.description} />

        {/**GENRE */}
        <p className="font-medium text-lg text-black">
          Genre:{" "}
          {data.volumeInfo.categories.map((category, id) => (
            <span className="text-accentColor" key={id}>
              {category}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

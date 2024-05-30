'use client'

import { Metadata } from 'next'
import React from 'react'
import Sidebar from './sidebar'
import Navbar from '../components/navbar'
import { SessionProvider } from 'next-auth/react'
import CarouselMain from './carousel'
import Search from '../components/Search'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import Booknavbar from '../components/booknavbar'


export default function RootLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();
   const router = useRouter();

  return (
      <div className="flex bg-[#F8F6EA] min-w-full max-h-screen overflow-hidden">
      {pathname !== '/books' &&  <Sidebar />}

        <div className="w-full overflow-y-auto overflow-x-hidden space-y-3">
          <Booknavbar />
          <ChevronLeft 
              onClick={() => router.back()} 
              size={32} 
              className="mt-6 ms-[15px] sm:ms-[40px] md::ms-[50px]" 
              cursor={'pointer'}
            />
          {children}
        </div>
      </div>
  );
}

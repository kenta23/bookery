'use client'

import { Metadata } from 'next'
import React, { Suspense } from 'react'
import Sidebar from './sidebar'
import Navbar from '../components/navbar'
import { SessionProvider } from 'next-auth/react'
import CarouselMain from './carousel'
import Search from '../components/Search'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import Booknavbar from '../components/booknavbar'


function SearchBarFallback() {
  return <>placeholder</>
}

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
         <Suspense fallback={<SearchBarFallback />}>
            {children}
         </Suspense>
        </div>
      </div>
  );
}

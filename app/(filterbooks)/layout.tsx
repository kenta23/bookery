

import { Metadata } from 'next'
import React from 'react'
import Sidebar from './sidebar'
import Navbar from './newreleases/navbar'
import { SessionProvider } from 'next-auth/react'
import CarouselMain from './newreleases/carousel'
import Search from './newreleases/Search'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const props = 'sample';
  return (
    <SessionProvider>
      <div className="flex bg-[#F8F6EA] min-w-full flex-row max-h-screen overflow-hidden">
        <Sidebar />

        <div className="w-full overflow-y-auto space-y-4">
          <Navbar />
          <Search />
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}

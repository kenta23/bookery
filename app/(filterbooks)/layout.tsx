import { Metadata } from 'next'
import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import { SessionProvider } from 'next-auth/react'
import CarouselMain from './carousel'
import Search from './Search'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  
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

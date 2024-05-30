import React from 'react'
import Navbar from '../components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen w-full'>
         <Navbar />    
         {children}      
    </div>
  )
}

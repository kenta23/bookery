import React from 'react'
import Navbar from '../components/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
         <Navbar />

         <div>
            {children} 
         </div>
      
    </div>
  )
}

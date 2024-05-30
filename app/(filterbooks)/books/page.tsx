import React from 'react'
import Search from '../../components/Search'
import Navbar from '../../components/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: "Search Book",
   description: "search and read"
}

export default function Books() {
  return (
    <div className='w-full h-full min-h-screen'>
            
        <Search />
        
    </div>
  )
}

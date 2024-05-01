'use client'

import load from '@/lib/bookpreview';
import React, { useEffect } from 'react'


export default function BookPreview() {
  
  return (
    <div className='border w-[500px] h-[600px]'>
        <div id="viewerCanvas" style={{ width: '600px', height: '800px' }}></div>;
    </div>
  )
}

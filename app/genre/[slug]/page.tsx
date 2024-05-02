import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
  return (
    <div>
        <h1>{slug}</h1>
    </div>
  )
}

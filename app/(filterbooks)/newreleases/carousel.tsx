'use client'

import * as React from "react"
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


const imagesrc = [
    {
        id: 1,
        src: "/slide 1.png"
    },
    {
        id: 2,
        src: "/slide 2.png"
    },
    {
        id: 3,
        src: "/slide 3.png"
    },
    {
        id: 4,
        src: "/slide 4.png"
    },
    {
        id: 5,
        src: "/slide 5.png"
    }
]



export default function CarouselMain() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="w-[65%] mx-auto flex items-center h-auto">
      <Carousel
        plugins={[plugin.current]}
        className="w-auto h-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {imagesrc.map((img) => (
            <CarouselItem key={img.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={img.src}
                      alt={img.src}
                      width={500}
                      height={500}
                      className="size-full object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@workspace/ui/components/carousel'

const photos = [
  { src: '/photo_1.jpeg', alt: 'Photo 1' },
  { src: '/photo_2.jpeg', alt: 'Photo 2' },
]

export const PhotosCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({ delay: 4000, stopOnInteraction: false }),
      ]}
    >
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className="w-full aspect-[4/3] object-cover rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

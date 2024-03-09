"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const ImageCarousel: React.FC<{
  images: { alt: string; src: StaticImageData }[];
}> = ({ images }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.alt}>
            <Image
              width={1280}
              alt={image.alt}
              key={image.alt}
              src={image.src}
              className="aspect-[3/4] object-cover object-center lg:aspect-[3/2] lg:object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="opacity-50 hover:opacity-100" />
      <CarouselNext className="opacity-50 hover:opacity-100" />
    </Carousel>
  );
};

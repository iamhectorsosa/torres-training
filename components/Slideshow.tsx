"use client";

import * as React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image from "next/image";
import { motion } from "framer-motion";

export const images: { alt: string; src: string }[] = [
  { alt: "Torres Training", src: "/images/IMG_9212_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9213_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9221.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9224.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9226_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9228_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9229_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9230_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9233_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9234_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9238_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9252.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9257_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9259_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9263_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9266.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9492_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9495_2.JPG" },
  { alt: "Torres Training", src: "/images/IMG_9498_2.JPG" },
];

export const Slideshow: React.FC = () => {
  return (
    <ScrollArea className="w-dvw whitespace-nowrap">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.25,
            },
          },
        }}
        className="flex w-max space-x-4 p-4"
      >
        {images.map(({ alt, src }, i) => (
          <motion.figure
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            key={i}
            className="shrink-0"
          >
            <div className="overflow-hidden rounded-md w-[240px] aspect-[3/4] relative shadow">
              <Image
                priority
                src={src}
                alt={alt}
                className="h-fit w-fit object-cover"
                sizes="240px"
                fill
              />
            </div>
          </motion.figure>
        ))}
      </motion.div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

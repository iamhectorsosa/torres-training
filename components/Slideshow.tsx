"use client";

import * as React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import IMG_9212_2 from "../public/images/IMG_9212_2.jpg";
import IMG_9213_2 from "../public/images/IMG_9213_2.jpg";
import IMG_9221 from "../public/images/IMG_9221.jpg";
import IMG_9224 from "../public/images/IMG_9224.jpg";
import IMG_9226_2 from "../public/images/IMG_9226_2.jpg";
import IMG_9228_2 from "../public/images/IMG_9228_2.jpg";
import IMG_9229_2 from "../public/images/IMG_9229_2.jpg";
import IMG_9230_2 from "../public/images/IMG_9230_2.jpg";
import IMG_9233_2 from "../public/images/IMG_9233_2.jpg";
import IMG_9234_2 from "../public/images/IMG_9234_2.jpg";
import IMG_9238_2 from "../public/images/IMG_9238_2.jpg";
import IMG_9252 from "../public/images/IMG_9252.jpg";
import IMG_9257_2 from "../public/images/IMG_9257_2.jpg";
import IMG_9259_2 from "../public/images/IMG_9259_2.jpg";
import IMG_9263_2 from "../public/images/IMG_9263_2.jpg";
import IMG_9266 from "../public/images/IMG_9266.jpg";
import IMG_9492_2 from "../public/images/IMG_9492_2.jpg";
import IMG_9495_2 from "../public/images/IMG_9495_2.jpg";
import IMG_9498_2 from "../public/images/IMG_9498_2.jpg";

export const images: { alt: string; src: StaticImageData }[] = [
  { alt: "Torres Training", src: IMG_9212_2 },
  { alt: "Torres Training", src: IMG_9213_2 },
  { alt: "Torres Training", src: IMG_9221 },
  { alt: "Torres Training", src: IMG_9224 },
  { alt: "Torres Training", src: IMG_9226_2 },
  { alt: "Torres Training", src: IMG_9228_2 },
  { alt: "Torres Training", src: IMG_9229_2 },
  { alt: "Torres Training", src: IMG_9230_2 },
  { alt: "Torres Training", src: IMG_9233_2 },
  { alt: "Torres Training", src: IMG_9234_2 },
  { alt: "Torres Training", src: IMG_9238_2 },
  { alt: "Torres Training", src: IMG_9252 },
  { alt: "Torres Training", src: IMG_9257_2 },
  { alt: "Torres Training", src: IMG_9259_2 },
  { alt: "Torres Training", src: IMG_9263_2 },
  { alt: "Torres Training", src: IMG_9266 },
  { alt: "Torres Training", src: IMG_9492_2 },
  { alt: "Torres Training", src: IMG_9495_2 },
  { alt: "Torres Training", src: IMG_9498_2 },
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

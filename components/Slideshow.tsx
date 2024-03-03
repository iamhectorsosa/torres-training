import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { InfiniteScroll } from "./InfiniteScroll";
import IMG_9212_2 from "../public/images/IMG_9212_2.jpg";
import IMG_9213_2 from "../public/images/IMG_9213_2.jpg";
import IMG_9221 from "../public/images/IMG_9221.jpg";
import IMG_9224 from "../public/images/IMG_9224.jpg";
import IMG_9228_2 from "../public/images/IMG_9228_2.jpg";
import IMG_9229_2 from "../public/images/IMG_9229_2.jpg";
import IMG_9230_2 from "../public/images/IMG_9230_2.jpg";
import IMG_9238_2 from "../public/images/IMG_9238_2.jpg";
import IMG_9252 from "../public/images/IMG_9252.jpg";
import IMG_9257_2 from "../public/images/IMG_9257_2.jpg";
import IMG_9259_2 from "../public/images/IMG_9259_2.jpg";
import IMG_9263_2 from "../public/images/IMG_9263_2.jpg";
import IMG_9266 from "../public/images/IMG_9266.jpg";
import IMG_9495_2 from "../public/images/IMG_9495_2.jpg";
import IMG_9498_2 from "../public/images/IMG_9498_2.jpg";

export const images: { alt: string; src: StaticImageData }[] = [
  { alt: "Fabio training dumbbell press", src: IMG_9212_2 },
  { alt: "Fabio training cable crossover", src: IMG_9213_2 },
  { alt: "Fabio training barbell squat", src: IMG_9221 },
  { alt: "Fabio teaching deadlifts", src: IMG_9224 },
  { alt: "Fabio training deadlifts", src: IMG_9228_2 },
  { alt: "Fabio training lunges", src: IMG_9229_2 },
  { alt: "Fabio training lunges form", src: IMG_9230_2 },
  { alt: "Fabio training pullups", src: IMG_9238_2 },
  { alt: "Fabio training cable crossover form", src: IMG_9252 },
  { alt: "Fabio training cable crossover hold", src: IMG_9257_2 },
  { alt: "Fabio training tricep pulldown", src: IMG_9259_2 },
  { alt: "Fabio training dumbbell press form", src: IMG_9263_2 },
  { alt: "Fabio training dummbell press hold", src: IMG_9266 },
  { alt: "Fabio training squats form", src: IMG_9495_2 },
  { alt: "Fabio training good mornings form", src: IMG_9498_2 },
];

export const Slideshow: React.FC = () => {
  return (
    <InfiniteScroll className="py-4" animationDuration="140s">
      {images.map(({ alt, src }, i) => (
        <figure key={i}>
          <div className="overflow-hidden rounded-md w-[66dvw] xs:w-[240px] lg:w-[320px] aspect-[3/5] lg:aspect-[3/4] relative shadow">
            <Image
              loading={i > 10 ? "lazy" : undefined}
              priority={i <= 10}
              placeholder={i <= 10 ? "blur" : "empty"}
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              width={320}
            />
          </div>
        </figure>
      ))}
    </InfiniteScroll>
  );
};

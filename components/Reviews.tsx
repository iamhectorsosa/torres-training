"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Review = {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
};

export const Reviews: React.FC<{
  reviews: Review[];
  pauseOnHover?: boolean;
  className?: string;
}> = ({ reviews, pauseOnHover = true, className }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    function loadAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );

        containerRef.current.style.setProperty("--animation-duration", "120s");

        setStart(true);
      }
    }

    loadAnimation();
    return loadAnimation;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative overflow-hidden w-full cursor-default",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap items-center",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {reviews.map(
          ({
            text,
            author_name,
            time,
            relative_time_description,
            profile_photo_url,
            rating,
          }) => (
            <li
              className="w-[350px] max-w-full rounded-lg bg-muted/30 px-8 py-6 md:w-[450px] text-muted-foreground tracking-tight h-fit shadow-sm"
              key={author_name + time}
            >
              <blockquote className="flex flex-col gap-y-4">
                <div className="h-5 flex gap-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-full"
                      viewBox="0 0 111 108"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className={
                          i >= rating ? "fill-transparent" : "fill-primary"
                        }
                        d="M52.447 0L64.491 37.069L64.828 38.105H104.894L73.362 61.015L72.48 61.655L72.817 62.692L84.861 99.76L53.329 76.85L52.447 76.21L51.565 76.85L20.033 99.76L32.077 62.692L32.414 61.655L31.532 61.015L0 38.105H40.067L40.404 37.068L52.447 0Z"
                      />
                      <path
                        className="stroke-primary"
                        d="M57 6.854L69.044 43.923L69.381 44.959H109.447L77.915 67.869L77.033 68.509L77.37 69.546L89.414 106.614L57.882 83.704L57 83.064L56.118 83.704L24.586 106.614L36.63 69.546L36.967 68.509L36.085 67.869L4.553 44.959H44.62L44.957 43.922L57 6.854Z"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
                <p className="lg:text-lg leading-relaxed">{text}</p>
                <div className="flex items-center gap-x-2">
                  <Avatar>
                    <AvatarImage
                      referrerPolicy="no-referrer"
                      src={profile_photo_url}
                      alt={author_name}
                    />
                    <AvatarFallback>
                      {author_name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span>{author_name}</span>
                  <span className="ml-auto text-sm">
                    {relative_time_description}
                  </span>
                </div>
              </blockquote>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

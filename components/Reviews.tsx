import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { InfiniteScroll } from "./InfiniteScroll";

type Review = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
};

export const Reviews: React.FC<{
  reviews: Review[];
}> = ({ reviews }) => {
  return (
    <InfiniteScroll className="py-4">
      {reviews.map((review) => (
        <div
          className="h-fit w-[350px] rounded-lg bg-muted/30 px-8 py-6 tracking-tight text-muted-foreground shadow-sm md:w-[450px]"
          key={review.authorAttribution.displayName + review.publishTime}
        >
          <blockquote className="flex flex-col gap-y-4">
            <div className="flex h-5 gap-x-2">
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
                      i >= review.rating ? "fill-transparent" : "fill-primary"
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
            <p className="line-clamp-6 leading-loose lg:text-lg lg:leading-loose">
              {review.text.text}
            </p>
            <div className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage
                  referrerPolicy="no-referrer"
                  src={review.authorAttribution.photoUri}
                  alt={review.authorAttribution.displayName}
                />
                <AvatarFallback>
                  {review.authorAttribution.displayName
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{review.authorAttribution.displayName}</span>
              <span className="ml-auto">
                {review.relativePublishTimeDescription}
              </span>
            </div>
          </blockquote>
        </div>
      ))}
    </InfiniteScroll>
  );
};

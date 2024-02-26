"use client";
import { useInView } from "framer-motion";
import * as React from "react";

export const Highlight: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="relative w-fit" ref={ref}>
      <span
        style={{
          width: isInView ? "115%" : 0,
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="absolute top-2.5 -left-2.5 h-2 -skew-y-2 bg-amber-200"
      ></span>
      <span className="relative text-sm uppercase font-medium tracking-wide">
        {children}
      </span>
    </div>
  );
};

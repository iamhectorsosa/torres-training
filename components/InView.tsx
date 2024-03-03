"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const InView: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ className, children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -180px",
    once: true,
  });

  return (
    <div className="flex items-center justify-center w-full" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
        }}
        className={cn("w-full", className)}
      >
        {children}
      </div>
    </div>
  );
};

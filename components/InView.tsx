"use client";

import * as React from "react";
import { useInView } from "framer-motion";

export const InView: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
        }}
      >
        {children}
      </div>
    </section>
  );
};

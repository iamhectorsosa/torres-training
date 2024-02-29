"use client";

import * as React from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const ScrollToTop: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = React.useState(false);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress > 0.2 && !showButton) {
      setShowButton(!showButton);
    }
    if (progress < 0.2 && showButton) {
      setShowButton(!showButton);
    }
  });

  return (
    <Button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }}
      style={{
        transform: showButton ? "none" : "translateY(20px)",
        opacity: showButton ? 1 : 0,
        transition: "all 0.25s cubic-bezier(0.17, 0.55, 0.55, 1)",
      }}
      className="fixed bottom-6 right-6 z-50"
      variant="secondary"
      size="icon"
    >
      <ArrowUpIcon />
    </Button>
  );
};

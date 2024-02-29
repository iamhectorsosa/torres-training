"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const Scroll: React.FC = () => {
  return (
    <motion.span
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 0.6,
      }}
    >
      <span className="uppercase font-medium tracking-wide text-xs dark:text-primary text-muted-foreground opacity-80">
        Scroll down for more
      </span>
    </motion.span>
  );
};

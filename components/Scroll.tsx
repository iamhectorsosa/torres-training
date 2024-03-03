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
        delay: 1.2,
        duration: 0.6,
      }}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground opacity-80 dark:text-primary">
        Scroll down for more
      </span>
    </motion.span>
  );
};

"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "./ui/link";

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
        delay: 1.5,
        duration: 0.6,
      }}
    >
      <Link
        className="uppercase font-medium tracking-wide text-xs dark:text-primary text-muted-foreground decoration-muted-foreground dark:decoration-primary opacity-80"
        href="#me"
      >
        Scroll down for more
      </Link>
    </motion.span>
  );
};

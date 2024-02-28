"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FadeIn: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

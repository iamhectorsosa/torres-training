"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const FadeIn: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85 }}
    >
      {children}
    </motion.div>
  );
};

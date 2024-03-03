"use client";

import { motion } from "framer-motion";
import * as React from "react";

export const Steps: React.FC<{
  steps: { step: string; title: string; description: string }[];
}> = ({ steps }) => {
  return (
    <>
      {steps.map(({ step, title, description }) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.5,
              },
            },
          }}
          transition={{
            ease: "easeOut",
          }}
          initial="hidden"
          whileInView="show"
          key={title}
          className="space-y-2"
        >
          <span className="bg-gradient-to-b from-foreground via-foreground to-transparent bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent opacity-60">
            {step}
          </span>
          <h3 className="font-bold uppercase tracking-wide lg:text-xl">
            {title}
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
            {description}
          </p>
        </motion.div>
      ))}
    </>
  );
};

"use client";
import * as React from "react";
import { type Variants, motion } from "framer-motion";
import { Link } from "./ui/link";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const Arrow: React.FC = () => {
  return (
    <>
      <motion.svg
        width="105"
        height="314"
        viewBox="0 0 140 314"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          className="dark:stroke-primary stroke-muted-foreground"
          d="M4.99423 116.145C35.557 -43.0514 68.0393 -35.9876 35.2279 176.203C90.4415 -13.2909 110.607 5.53303 76.2516 300.626"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={draw}
          custom={1}
        />
        <motion.path
          className="dark:stroke-primary stroke-muted-foreground"
          d="M59.4901 271.899L74.5994 304.822L99.3664 276.986"
          strokeWidth="5"
          strokeLinecap="round"
          variants={draw}
          custom={2}
        />
      </motion.svg>
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
          className="uppercase font-medium tracking-wide text-xs dark:text-primary text-muted-foreground decoration-muted-foreground dark:decoration-primary"
          href="#me"
        >
          Scroll for more
        </Link>
      </motion.span>
    </>
  );
};

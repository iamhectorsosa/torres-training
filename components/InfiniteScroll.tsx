"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * `InfiniteScroll` is a React functional component that renders its children along with their duplicates,
 * wrapped inside motion divs for animation. It is designed to support infinite scrolling features by
 * visually duplicating the content. This component leverages Framer Motion for animation effects,
 * allowing for a smooth transition of content appearance.
 *
 * Props:
 * - `children`: ReactNode | ReactNode[]. The content to be displayed and duplicated within the infinite scroll.
 * - `className`: string (optional). A classname string to be applied to the outermost `div` for custom styling.
 * - `delayChildren`: number (optional, default: 0.25). The delay before starting the animation on children, in seconds.
 * - `staggerChildren`: number (optional, default: 0.25). The delay between starting the animations on individual children, in seconds.
 * - `animationDuration`: string (optional, default: "80s"). The total animation duration for the scrolling effect, specified as a string to include time units (e.g., "80s" for eighty seconds, "2m" for two minutes).
 *
 * The component wraps each child (and its duplicate) in a `motion.div` with a fade-in animation controlled
 * by the `delayChildren` and `staggerChildren` props. The `animationDuration` prop specifies the total duration
 * of the scrolling animation, allowing for customization of how long the infinite scroll effect lasts. The `className`
 * prop allows for additional styling on the container. This component is useful for creating visually endless content
 * in a performant way, leveraging React's efficiency and Framer Motion's smooth animations.
 *
 * Example Usage:
 * ```jsx
 * <InfiniteScroll
 *   className="my-infinite-scroll"
 *   delayChildren={0.1}
 *   staggerChildren={0.1}
 *   animationDuration="90s"
 * >
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </InfiniteScroll>
 * ```
 */
export const InfiniteScroll: React.FC<
  React.PropsWithChildren & {
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
    animationDuration?: string;
  }
> = ({
  children,
  className,
  delayChildren = 0.25,
  staggerChildren = 0.25,
  animationDuration = "80s",
}) => {
  const originalChildren = React.Children.toArray(children);
  const clonedChildren = originalChildren.map((child) =>
    React.isValidElement(child) ? React.cloneElement(child) : child
  );

  const duplicateChildren = [...originalChildren, ...clonedChildren].map(
    (child, key) =>
      React.isValidElement(child) ? (
        <motion.div
          key={child.key ? child.key + key : `infinite-scroll-${key}`}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
          transition={{
            ease: "easeOut",
          }}
        >
          {child}
        </motion.div>
      ) : (
        child
      )
  );

  return (
    <div className={cn("w-full overflow-hidden cursor-default", className)}>
      <motion.div
        ref={(container) => {
          if (container) {
            container.style.setProperty(
              "--animation-duration",
              animationDuration
            );
          }
        }}
        initial="hidden"
        whileInView="show"
        onViewportEnter={(entry) => {
          entry?.target.classList.add("animate-scroll");
        }}
        onViewportLeave={(entry) => {
          entry?.target.classList.remove("animate-scroll");
        }}
        variants={{
          show: {
            transition: {
              delayChildren,
              staggerChildren,
            },
          },
        }}
        className="flex *:shrink-0 gap-x-4 w-max hover:[animation-play-state:paused]"
      >
        {duplicateChildren}
      </motion.div>
    </div>
  );
};

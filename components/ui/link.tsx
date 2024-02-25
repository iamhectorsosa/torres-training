import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "transition-colors focus-visible:outline-none focus-visible:underline underline-offset-[6px] decoration-2 w-fit",
  {
    variants: {
      variant: {
        default: "text-foreground hover:underline decoration-foreground",
        primary:
          "text-primary-foreground hover:underline decoration-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({
  variant,
  className,
  children,
  href,
}) => {
  return (
    <NextLink
      href={href ?? "/"}
      className={cn(linkVariants({ variant, className }))}
    >
      {children}
    </NextLink>
  );
};

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "w-fit decoration-2 underline-offset-[6px] transition-colors focus-visible:underline focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: "text-foreground decoration-foreground hover:underline",
        primary:
          "text-primary-foreground decoration-primary-foreground hover:underline",
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

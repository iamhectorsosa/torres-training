"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "./ui/sonner";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
      <Analytics />
      <Toaster position="top-center" />
    </NextThemesProvider>
  );
}

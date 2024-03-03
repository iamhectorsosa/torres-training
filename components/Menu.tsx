"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import Image from "next/image";
import IMG_9263_2 from "../public/images/IMG_9263_2.jpg";
import IMG_9228_2 from "../public/images/IMG_9228_2.jpg";

export const Menu: React.FC<{
  navLinks: { href: string; label: string }[];
  contactLinks: { href: string; label: string }[];
}> = ({ navLinks, contactLinks }) => {
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button ref={triggerRef} variant="ghost" className="uppercase">
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-dvh">
        <div className="flex lg:flex-row flex-col h-full justify-between">
          <div className="flex flex-col h-full w-full px-6 py-8">
            <div className="flex justify-between items-center">
              <div
                onClick={() => {
                  triggerRef.current?.click();
                }}
              >
                <Link className="uppercase font-bold tracking-wide leading-none hover:no-underline">
                  Torres Training
                </Link>
              </div>
              <DrawerClose asChild>
                <Button ref={triggerRef} variant="ghost" className="uppercase">
                  Close
                </Button>
              </DrawerClose>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.24,
                  },
                },
              }}
              className="space-y-9 lg:space-y-12 mt-auto px-2"
            >
              {navLinks.map(({ href, label }) => (
                <motion.div
                  onClick={() => {
                    triggerRef.current?.click();
                  }}
                  key={href}
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                  whileHover={{
                    x: 9,
                  }}
                >
                  <Link
                    key={href}
                    className="block text-3xl lg:text-4xl font-headings decoration-4 underline-offset-[6px] relative hover:no-underline"
                    href={href}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute w-16 aspect-square -top-6 -left-6"
                    >
                      <svg
                        className="fill-none stroke-primary"
                        viewBox="0 0 200 200"
                        stroke="#d6ab04"
                        fill="none"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-accent"
                          stroke="none"
                          transform="translate(-10,-10)"
                          d="M159.5 45 41 85.5l7.5 70 81-56 30-54.5Z"
                        />
                        <path d="M159.5 45 41 85.5l7.5 70 81-56 30-54.5Z" />
                      </svg>
                    </motion.span>
                    <span className="relative">{label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-auto space-y-2">
              {contactLinks.map(({ href, label }) => (
                <motion.div key={href} whileHover={{ x: 2.5 }}>
                  <Link
                    className="block text-muted-foreground decoration-muted-foreground font-medium"
                    href={href}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:h-full h-[30%] w-full relative">
            <Image
              placeholder="blur"
              priority
              alt="Fabio Torres"
              src={IMG_9263_2}
              width={1024}
              className="object-cover object-center h-full w-full pointer-events-none hidden lg:block"
            />
            <Image
              placeholder="blur"
              priority
              alt="Fabio Torres"
              src={IMG_9228_2}
              width={1024}
              className="object-cover object-center h-full w-full pointer-events-none block lg:hidden"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

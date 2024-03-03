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
              className="space-y-4 lg:space-y-8 mt-auto"
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
                    className="block text-2xl lg:text-4xl uppercase font-bold decoration-4 underline-offset-[6px] relative hover:no-underline"
                    href={href}
                  >
                    {label}
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
          <div className="lg:h-full h-[25%] w-full relative">
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

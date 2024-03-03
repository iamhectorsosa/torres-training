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
        <div className="flex h-full flex-col justify-between lg:flex-row">
          <div className="flex size-full flex-col px-6 py-8">
            <div className="flex items-center justify-between">
              <div
                onClick={() => {
                  triggerRef.current?.click();
                }}
              >
                <Link className="font-bold uppercase leading-none tracking-wide hover:no-underline">
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
              className="mt-auto space-y-4 lg:space-y-8"
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
                    className="relative block text-2xl font-bold uppercase decoration-4 underline-offset-[6px] hover:no-underline lg:text-4xl"
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
                    className="block font-medium text-muted-foreground decoration-muted-foreground"
                    href={href}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative h-[25%] w-full lg:h-full">
            <Image
              placeholder="blur"
              priority
              alt="Fabio Torres"
              src={IMG_9263_2}
              width={1024}
              className="pointer-events-none hidden size-full object-cover object-center lg:block"
            />
            <Image
              placeholder="blur"
              priority
              alt="Fabio Torres"
              src={IMG_9228_2}
              width={1024}
              className="pointer-events-none block size-full object-cover object-center lg:hidden"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

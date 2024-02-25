"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { motion } from "framer-motion";
import Image from "next/image";
import IMG_9252 from "../public/images/IMG_9252.jpg";

export const Menu: React.FC<{
  navLinks: { href: string; label: string }[];
  contactLinks: { href: string; label: string }[];
}> = ({ navLinks, contactLinks }) => {
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="ghost" className="uppercase">
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-dvh">
        <div className="flex lg:flex-row flex-col h-full justify-between">
          <div className="flex flex-col h-full w-full px-6 py-8">
            <div className="flex justify-between items-center">
              <Link className="uppercase font-bold tracking-wide leading-none hover:no-underline">
                Torres Training
              </Link>
              <DrawerTrigger asChild>
                <Button variant="ghost" className="uppercase">
                  Close
                </Button>
              </DrawerTrigger>
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
                    delayChildren: 0.25,
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="space-y-6 lg:space-y-9 mt-auto"
            >
              {navLinks.map(({ href, label }) => (
                <motion.div
                  key={href}
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 },
                  }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    key={href}
                    className="block text-3xl lg:text-4xl font-headings decoration-4 underline-offset-[6px] relative hover:no-underline"
                    href={href}
                  >
                    <span className="absolute top-0 left-2 -rotate-6 -translate-x-[50%] w-9 h-4 -skew-y-2 bg-amber-200"></span>
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
          <div className="lg:h-full h-[50%] w-full relative">
            <Image
              alt="Fabio Torres"
              src={IMG_9252}
              fill
              className="object-cover object-center h-full w-full pointer-events-none"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

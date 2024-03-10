import * as React from "react";
import { Link } from "./ui/link";

export const Footer: React.FC<{
  navLinks: { href: string; label: string }[];
  contactLinks: { href: string; label: string }[];
}> = ({ navLinks, contactLinks }) => {
  return (
    <div className="space-y-9">
      <div className="mx-auto max-w-7xl space-y-6 lg:flex lg:items-start lg:justify-between lg:space-y-0">
        <div className="space-y-2">
          <Link
            href="/"
            className="font-bold uppercase leading-none tracking-wide text-secondary-foreground decoration-secondary-foreground hover:no-underline"
          >
            Torres Training
          </Link>
          <div className="flex flex-col gap-y-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                className="block text-secondary-foreground decoration-secondary-foreground"
                href={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-2.5 lg:text-right">
          <h2 className=" font-semibold uppercase tracking-wide text-secondary-foreground">
            Contact
          </h2>
          <div className="flex flex-col gap-y-2 lg:items-end">
            {contactLinks.map(({ href, label }) => (
              <Link
                key={href}
                className="block text-secondary-foreground decoration-secondary-foreground"
                href={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <iframe
          title="Google Map for Torres Training"
          className="h-[240px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1556.3493348247275!2d-9.148915670623717!3d38.724726700000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933a28665dde5%3A0x269b72c0c1fabda8!2sTelo%20Fitness%20Studio%20-%20Personal%20Trainer%20%26%20Studio%20de%20Pilates!5e0!3m2!1sen!2scz!4v1709121172897!5m2!1sen!2scz"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

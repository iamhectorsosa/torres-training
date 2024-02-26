import * as React from "react";
import { Link } from "./ui/link";

export const Footer: React.FC<{
  navLinks: { href: string; label: string }[];
  contactLinks: { href: string; label: string }[];
}> = ({ navLinks, contactLinks }) => {
  return (
    <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:items-start lg:space-y-0 space-y-6">
      <div className="space-y-2">
        <Link
          href="/"
          className="uppercase font-bold tracking-wide leading-none hover:no-underline text-muted decoration-muted"
        >
          Torres Training
        </Link>
        <div className="flex flex-col gap-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              className="block text-muted decoration-muted text-sm font-medium"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-2.5 lg:text-right">
        <h2 className="text-sm text-muted uppercase font-semibold tracking-wide">
          Contact
        </h2>
        <div className="gap-y-2 flex flex-col lg:items-end">
          {contactLinks.map(({ href, label }) => (
            <Link
              key={href}
              className="block text-muted decoration-muted text-sm font-medium"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

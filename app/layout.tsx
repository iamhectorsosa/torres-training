import type { Metadata } from "next";
import {
  Alfa_Slab_One as FontHeadings,
  Inter as FontSans,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/link";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { ScrollToTop } from "@/components/ScrollToTop";

const fontHeadings = FontHeadings({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-headings",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  title: "Torres Training",
  description: "by Fabio Torres, Personal Trainer & Osteopath",
  keywords: [
    "Lisbon",
    "Personal",
    "Trainer",
    "Personal Trainer",
    "Osteopath",
    "English",
    "Gym",
    "Fitness",
  ],
  openGraph: {
    title: "Torres Training",
    description: "by Fabio Torres, Personal Trainer & Osteopath",
    url: new URL("https://torrestraining.pt"),
    siteName: "Torres Training",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh flex flex-col bg-background font-sans antialiased",
          fontHeadings.variable,
          fontSans.variable
        )}
      >
        <Providers>
          <main className="z-10 bg-background">
            <div className="px-6 sticky top-0 pt-8 pb-4 z-30 bg-background/80 backdrop-blur-lg w-full">
              <nav className="flex max-w-7xl mx-auto justify-between items-center">
                <Link
                  href="/"
                  className="uppercase font-bold tracking-wide leading-none hover:no-underline"
                >
                  Torres Training
                </Link>
                <Menu navLinks={navLinks} contactLinks={contactLinks} />
              </nav>
            </div>
            <div className="px-6">
              {children}
            </div>
            <ScrollToTop />
          </main>
          <footer className="bg-secondary px-6 pt-12 pb-24 mt-auto lg:sticky lg:bottom-0">
            <Footer navLinks={navLinks} contactLinks={contactLinks} />
          </footer>
        </Providers>
      </body>
    </html>
  );
}

const navLinks = [
  {
    label: "Personal Training",
    href: "https://wa.me/351961379705",
  },
  {
    label: "FRC Mobility Training",
    href: "https://wa.me/351961379705",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const contactLinks = [
  {
    label: "R. Rodrigues Sampaio, 170 A, Lisbon",
    href: "https://maps.app.goo.gl/9aVHWEXJ8E4rZ1zJ7",
  },
  {
    label: "ptfabiotorres@gmail.com",
    href: "mailto:ptfabiotorres@gmail.com",
  },
  {
    label: "+351 961 379 705",
    href: "https://wa.me/351961379705",
  },
  {
    label: "@pt.fabiotorres",
    href: "https://www.instagram.com/pt.fabiotorres",
  },
];

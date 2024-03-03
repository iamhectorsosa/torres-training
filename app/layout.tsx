import type { Metadata } from "next";
import { Oswald as FontHeadings, Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/link";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { ScrollToTop } from "@/components/ScrollToTop";

const fontHeadings = FontHeadings({
  subsets: ["latin"],
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
            <div className="sticky top-0 z-30 w-full bg-background/80 px-6 pb-4 pt-8 backdrop-blur-lg">
              <nav className="mx-auto flex max-w-7xl items-center justify-between">
                <Link
                  href="/"
                  className="font-bold uppercase leading-none tracking-wide hover:no-underline"
                >
                  Torres Training
                </Link>
                <Menu navLinks={navLinks} contactLinks={contactLinks} />
              </nav>
            </div>
            {children}
            <ScrollToTop />
          </main>
          <footer className="mt-auto bg-secondary px-6 pb-24 pt-12 lg:sticky lg:bottom-0">
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
    href: "https://maps.app.goo.gl/iMMfzYVmYkGzsFZ39",
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

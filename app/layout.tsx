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
  alternates: { canonical: "https://torrestraining.pt" },
  title: "Welcome to Torres Training by Fabio Torres",
  description:
    "Personal Trainer & Osteopath. Ready to take your fitness to the next level?",
  keywords: [
    "Lisbon fitness coach",
    "expat personal training Lisbon",
    "foreigners fitness services Lisbon",
    "personal gym Lisbon",
    "online fitness consultation",
    "English speaking personal trainer Lisbon",
    "health and wellness coach Lisbon",
    "fitness and health services for expats",
    "personalized fitness plans Lisbon",
    "holistic health services Lisbon",
  ],
  openGraph: {
    title: "Welcome to Torres Training by Fabio Torres",
    description:
      "Personal Trainer & Osteopath. Ready to take your fitness to the next level?",
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
    label: "Home",
    href: "/",
  },
  {
    label: "Personal Training",
    href: "/personal-training",
  },
  {
    label: "Osteopathy",
    href: "/osteopathy",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const contactLinks = [
  {
    label: "R. Rodrigues Sampaio, 170 A, Lisbon",
    href: "https://maps.app.goo.gl/3qsjdQLcA2otPAqN7",
  },
  {
    label: "TĚLO Fitness Studio",
    href: "https://maps.app.goo.gl/8vkndt5e61yKn7wN6",
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

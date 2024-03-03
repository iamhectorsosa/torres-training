import { InView } from "@/components/InView";
import { ContactForm } from "@/components/ContactForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  title: "Contact | Torres Training",
  description: "Fill out the form below and get in touch",
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
    title: "Contact | Torres Training",
    description: "Fill out the form below and get in touch",
    url: new URL("https://torrestraining.pt/contact"),
    siteName: "Torres Training",
    locale: "en-US",
    type: "website",
  },
};

export default async function Contact() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-y-6 py-[6dvh] lg:py-32">
      <InView className="flex max-w-4xl flex-col justify-center gap-y-4 px-6">
        <h2 className="font-headings text-4xl font-medium uppercase leading-none xs:text-5xl lg:text-6xl 2xl:text-7xl">
          Contact
        </h2>
        <h3 className="relative max-w-lg font-bold uppercase tracking-wide md:text-lg lg:text-xl">
          Get in touch
        </h3>
        <p className="text-balance text-xl tracking-tight text-muted-foreground">
          Fill out the form below and we will get back to you soon
        </p>
      </InView>
      <InView className="flex max-w-4xl flex-col justify-center gap-y-4 px-6">
        <ContactForm />
      </InView>
    </section>
  );
}

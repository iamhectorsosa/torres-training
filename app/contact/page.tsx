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
    <section className="flex flex-col items-center justify-center gap-y-6 mx-auto py-[6dvh] lg:py-32">
      <InView className="flex flex-col gap-y-4 justify-center max-w-4xl px-6">
        <h2 className="text-4xl xs:text-5xl lg:text-6xl 2xl:text-7xl font-headings uppercase font-medium leading-none">
          Contact
        </h2>
        <h3 className="relative uppercase font-bold md:text-lg lg:text-xl tracking-wide max-w-lg">
          Get in touch
        </h3>
        <p className="text-muted-foreground text-balance text-xl tracking-tight">
          Fill out the form below and we will get back to you soon
        </p>
      </InView>
      <InView className="flex flex-col gap-y-4 justify-center max-w-4xl px-6">
        <ContactForm />
      </InView>
    </section>
  );
}

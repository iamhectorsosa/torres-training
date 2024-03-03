import { InView } from "@/components/InView";
import { ContactForm } from "@/components/ContactForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  title: "Contact | Torres Training",
  description: "Fill out the form below and we will get back to you soon",
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
    description: "Fill out the form below and we will get back to you soon",
    url: new URL("https://torrestraining.pt/contact"),
    siteName: "Torres Training",
    locale: "en-US",
    type: "website",
  },
};

export default async function Contact() {
  return (
    <section className="w-full space-y-8 px-4 py-24">
      <InView className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
            Contact
          </h2>
          <p className="text-balance text-xl tracking-tight text-muted-foreground">
            Fill out the form below and we will get back to you soon
          </p>
        </div>
        <ContactForm />
      </InView>
    </section>
  );
}

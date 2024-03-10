import { InView } from "@/components/InView";
import { ContactForm } from "@/components/ContactForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  alternates: { canonical: "https://torrestraining.pt/contact" },
  title: "Contact | Torres Training by Fabio Torres",
  description: "Your next chapter starts now—let's make it extraordinary",
  keywords: [
    "contact fitness coach Lisbon",
    "get in touch with personal trainer Lisbon",
    "book online fitness consultation",
    "schedule appointment with osteopath Lisbon",
    "fitness services inquiry Lisbon",
    "health coach contact information",
    "English speaking health services Lisbon",
    "consult fitness expert Lisbon",
    "reach out for fitness assistance Lisbon",
    "contact for fitness services Lisbon",
  ],
  openGraph: {
    title: "Contact | Torres Training by Fabio Torres",
    description: "Your next chapter starts now—let's make it extraordinary",
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
          <h1 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
            Contact
          </h1>
          <p className="text-xl tracking-tight text-muted-foreground">
            Whether you&apos;re seeking to elevate your fitness through
            personalized training or aiming to enhance your overall well-being
            through our specialized osteopathy approach, we&apos;re here to
            guide you every step of the way.
          </p>
          <p className="text-xl tracking-tight text-muted-foreground">
            Your next chapter starts now—let&apos;s make it extraordinary. Fill
            out the form below and we will get back to you soon.
          </p>
        </div>
        <ContactForm />
      </InView>
    </section>
  );
}

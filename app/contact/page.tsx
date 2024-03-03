import { InView } from "@/components/InView";
import { Highlight } from "@/components/Highlight";
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
    <section className="flex flex-col items-center justify-center gap-y-6 max-w-4xl mx-auto py-[6dvh] lg:py-32 px-6">
      <InView className="flex flex-col gap-y-4 justify-center items-center text-center">
        <Highlight>Contact</Highlight>
        <h1 className="text-xl lg:text-3xl font-headings">
          Fill out the form below and get in touch
        </h1>
      </InView>
      <div className="w-full mx-auto max-w-lg">
        <InView>
          <ContactForm />
        </InView>
      </div>
    </section>
  );
}

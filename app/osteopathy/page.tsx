import { ContactForm } from "@/components/ContactForm";
import { InView } from "@/components/InView";
import { type Metadata } from "next";
import Image from "next/image";
import IMG_9233_2 from "../../public/images/IMG_9233_2.jpg";
import IMG_9226_2 from "../../public/images/IMG_9226_2.jpg";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  title: "Osteopathy | Torres Training",
  description:
    "Discover the power of personalized Osteopathy to heal, revitalize, and empower your body",
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
    title: "Osteopathy | Torres Training",
    description:
      "Discover the power of personalized Osteopathy to heal, revitalize, and empower your body",
    url: new URL("https://torrestraining.pt/osteopathy"),
    siteName: "Torres Training",
    locale: "en-US",
    type: "website",
  },
};

export default async function Osteopathy() {
  return (
    <section className="w-full space-y-16 px-4 py-24">
      <InView className="max-w-4xl space-y-4">
        <Image
          placeholder="blur"
          priority
          alt="Fabio Torres correcting posture"
          src={IMG_9233_2}
          width={1024}
          className="pointer-events-none h-[180px] w-full object-cover object-center lg:h-[280px]"
        />
        <h1 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
          Osteopathy
        </h1>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
          Osteopathy is a system of diagnosis and treatment for a wide range of
          medical conditions. By addressing the root cause of discomfort, we
          ensure rapid, sustainable recovery. Embrace a life free from
          limitations and move fearlessly with our specialized, action-packed
          care.
        </p>
      </InView>
      <div className="mx-auto max-w-4xl space-y-8">
        <InView margin="0px">
          <h2 className="text-balance font-headings text-4xl font-medium uppercase leading-none lg:text-5xl">
            What&apos;s included?
          </h2>
        </InView>
        <Steps
          steps={[
            {
              step: "01",
              title: "Welcome to Our Osteopathy Journey",
              description:
                "Let me introduce you to osteopathy, a holistic approach I passionately follow to diagnose and treat a variety of conditions. It's fundamental to understand that your well-being hinges on the seamless cooperation of your skeleton, muscles, ligaments, and connective tissues. Together, we'll embark on a journey to enhance your health, focusing on the integral structure and function of your body.",
            },
            {
              step: "02",
              title: "Personalized Healing and Active Recovery",
              description:
                "In our sessions, I'll employ touch, physical manipulation, stretching, and massage, not just as treatments but as gateways to your active recovery. My approach, tailored especially for athletes and active individuals, emphasizes movement strategies and active techniques to prevent re-injury and cultivate fearless, effortless movement. Together, we'll build a treatment plan that resonates with your lifestyle and goals.",
            },
            {
              step: "03",
              title: "Discovering the Root Cause for Lasting Health",
              description:
                "My commitment goes beyond surface-level symptoms. I strive to uncover the root cause of your discomfort, employing a thorough analysis and leveraging sustainable healing strategies. This approach ensures you not only recover faster but also regain the strength to return to what you love doing most—stronger and more resilient. Let's work together to ensure your health journey is successful and lasting.",
            },
          ]}
        />
      </div>
      <InView className="max-w-4xl space-y-4">
        <Image
          placeholder="blur"
          priority
          alt="Fabio Torres correcting posture"
          src={IMG_9226_2}
          width={1024}
          className="pointer-events-none h-[180px] w-full object-cover object-center lg:h-[280px]"
        />
      </InView>
      <InView className="max-w-4xl space-y-8">
        <div className="space-y-4">
          <h2 className="text-balance font-headings text-4xl font-medium uppercase leading-none lg:text-5xl">
            Have any questions?
          </h2>
          <p className="text-balance text-xl tracking-tight text-muted-foreground">
            Fill out the form below and we will get back to you soon
          </p>
        </div>
        <ContactForm
          osteopathy={true}
          notes={"Hello, Fabio! I'm interested in Osteopathy!"}
        />
      </InView>
    </section>
  );
}

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
              title: "Understanding Osteopathy",
              description:
                "We begin with an introduction to osteopathy, explaining how it addresses a wide range of medical conditions through the integration of the body's structure and function, ensuring smooth collaboration between the skeleton, muscles, ligaments, and connective tissues.",
            },
            {
              step: "02",
              title: "Personalized Treatment Approach",
              description:
                "Utilizing touch, physical manipulation, stretching, and massage, we increase joint mobility, relieve muscle tension, and enhance blood and nerve supply to tissues, all tailored to support your body's healing mechanisms.",
            },
            {
              step: "03",
              title: "Active Recovery and Movement",
              description:
                "As a sports specialist, I incorporate an active approach to recovery, focusing on adjustments, mobilization techniques, and active movement strategies to prevent re-injury and promote fearless, thoughtless movement.",
            },
            {
              step: "04",
              title: "Root Cause Analysis",
              description:
                "Diving deep to identify the root cause of your symptoms, I devise sustainable strategies to address these issues, ensuring a quicker return to your beloved activities with a stronger and more resilient body.",
            },
            {
              step: "05",
              title: "Customized Osteopathy Sessions",
              description:
                "Every session is customized to your needs, focusing on providing you with the most effective treatment and recovery plan. Unlike typical passive sessions, our active, holistic approach guarantees comprehensive care.",
            },
            {
              step: "06",
              title: "Ongoing Support and Guidance",
              description:
                "I am committed to your long-term health and well-being, offering continuous support and guidance. As the owner and your dedicated osteopath, I ensure that your journey to health is well navigated, aiming for lasting results.",
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

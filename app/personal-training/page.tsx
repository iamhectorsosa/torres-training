import { ContactForm } from "@/components/ContactForm";
import { InView } from "@/components/InView";
import { type Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import IMG_9259_2 from "../../public/images/IMG_9259_2.jpg";
import IMG_9498_2 from "../../public/images/IMG_9498_2.jpg";
import { Steps } from "@/components/Steps";
import { ImageCarousel } from "@/components/ImageCarousel";

import IMG_9212_2 from "../../public/images/IMG_9212_2.jpg";
import IMG_9213_2 from "../../public/images/IMG_9213_2.jpg";
import IMG_9221 from "../../public/images/IMG_9221.jpg";
import IMG_9224 from "../../public/images/IMG_9224.jpg";
import IMG_9228_2 from "../../public/images/IMG_9228_2.jpg";
import IMG_9229_2 from "../../public/images/IMG_9229_2.jpg";
import IMG_9230_2 from "../../public/images/IMG_9230_2.jpg";
import IMG_9238_2 from "../../public/images/IMG_9238_2.jpg";
import IMG_9252 from "../../public/images/IMG_9252.jpg";
import IMG_9257_2 from "../../public/images/IMG_9257_2.jpg";
import IMG_9263_2 from "../../public/images/IMG_9263_2.jpg";
import IMG_9266 from "../../public/images/IMG_9266.jpg";
import IMG_9495_2 from "../../public/images/IMG_9495_2.jpg";

const images: { alt: string; src: StaticImageData }[] = [
  { alt: "Fabio training dumbbell press", src: IMG_9212_2 },
  { alt: "Fabio training cable crossover", src: IMG_9213_2 },
  { alt: "Fabio training barbell squat", src: IMG_9221 },
  { alt: "Fabio teaching deadlifts", src: IMG_9224 },
  { alt: "Fabio training deadlifts", src: IMG_9228_2 },
  { alt: "Fabio training lunges", src: IMG_9229_2 },
  { alt: "Fabio training lunges form", src: IMG_9230_2 },
  { alt: "Fabio training pullups", src: IMG_9238_2 },
  { alt: "Fabio training cable crossover form", src: IMG_9252 },
  { alt: "Fabio training cable crossover hold", src: IMG_9257_2 },
  { alt: "Fabio training tricep pulldown", src: IMG_9259_2 },
  { alt: "Fabio training dumbbell press form", src: IMG_9263_2 },
  { alt: "Fabio training dummbell press hold", src: IMG_9266 },
  { alt: "Fabio training squats form", src: IMG_9495_2 },
  { alt: "Fabio training good mornings form", src: IMG_9498_2 },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://torrestraining.pt"),
  title: "Personal Training | Torres Training",
  description:
    "Elevate your fitness journey with personalized 1-1 training sessions tailored to your goals, preferences, and fitness level",
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
    title: "Personal Training | Torres Training",
    description:
      "Elevate your fitness journey with personalized 1-1 training sessions tailored to your goals, preferences, and fitness level",
    url: new URL("https://torrestraining.pt/personal-training"),
    siteName: "Torres Training",
    locale: "en-US",
    type: "website",
  },
};

export default async function PersonalTraining() {
  return (
    <section className="w-full space-y-16 px-4 py-24">
      <InView className="max-w-4xl space-y-4">
        <Image
          placeholder="blur"
          priority
          alt="Fabio Torres correcting technique"
          src={IMG_9259_2}
          width={1024}
          className="pointer-events-none h-[180px] w-full object-cover object-center lg:h-[280px]"
        />
        <h1 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
          Personal Training
        </h1>
        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
          Elevate your fitness journey with personalized 1-1 training sessions
          tailored to your goals, preferences, and fitness level. whether
          you&apos;re aiming to lose weight, build muscle, improve endurance, or
          enhance overall wellness, let&apos;s achieve long-lasting results.
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
              title: "Initial Assessment",
              description:
                "We'll start with a comprehensive assessment of your fitness level, goals, any specific needs /concerns you may have and a full functional range ASSESSMENT to tailor your sessions specific for you.",
            },
            {
              step: "02",
              title: "Customized Workout Plan",
              description:
                "Based on your assessment, I will design a personalized workout plan that is specifically tailored to your needs, preferences, and schedule.",
            },
            {
              step: "03",
              title: "1-on-1 Training Sessions",
              description:
                "You'll receive individualized attention and support at my private personal training studio during our one-on-one training sessions, where I'll guide you through each exercise with proper form and technique. ",
            },
            {
              step: "04",
              title: "Progress Tracking",
              description:
                "We'll track your progress regularly to ensure you're on the right track to achieving your goals. Adjustments will be made to your program as needed to keep you challenged and progressing.",
            },
            {
              step: "05",
              title: "Motivation and Accountability",
              description:
                "I'll be your biggest source of motivation, helping you stay accountable to your goals and pushing you to reach new heights.",
            },
            {
              step: "06",
              title: "Continuous Support",
              description:
                "I'm here to support you every step of the way, whether you have questions, need encouragement, or just want to celebrate your victories!",
            },
          ]}
        />
      </div>
      <InView className="max-w-4xl space-y-4">
        <ImageCarousel images={images} />
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
          personal_training={true}
          notes={"Hello, Fabio! I'm interested in Personal Training!"}
        />
      </InView>
    </section>
  );
}

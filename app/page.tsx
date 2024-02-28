import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/Slideshow";
import { InView } from "@/components/InView";
import Image from "next/image";
import Link from "next/link";
import IMG_9211 from "../public/images/IMG_9211.jpg";
import logos from "../public/logos.svg";
import logosDark from "../public/logos-dark.svg";
import logosMobile from "../public/logos-mobile.svg";
import logosDarkMobile from "../public/logos-dark-mobile.svg";
import { Highlight } from "@/components/Highlight";
import { Scroll } from "@/components/Scroll";
import { Reviews } from "@/components/Reviews";

async function getReviews(): Promise<typeof staticReviews> {
  if (process.env.NODE_ENV === "production") {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${process.env.GOOGLE_MAPS_PLACE_ID}?fields=reviews,userRatingCount,rating&languageCode=en&key=${process.env.GOOGLE_MAPS_KEY}`,
      {
        next: { revalidate: 86400 },
      }
    )
      .then((data) => data.json())
      .catch((error) => {
        if (error instanceof Error) {
          console.error(error);
        } else {
          console.error("Unknown error fetching reviews");
        }
        return staticReviews;
      });

    if (response?.reviews) {
      return response;
    }
    return staticReviews;
  }

  return Promise.resolve(staticReviews);
}

export default async function Home() {
  const { reviews } = await getReviews();

  return (
    <div>
      <section className="h-[95dvh] flex flex-col items-center justify-center gap-y-8 lg:gap-y-16 lg:py-32">
        <FadeIn className="flex flex-col gap-y-4 justify-center items-center max-w-4xl text-center lg:mt-auto">
          <Highlight>Torres Training</Highlight>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headings">
            Personal Trainer and Osteopath
          </h1>
          <p className="text-muted-foreground text-xl lg:text-2xl tracking-tight">
            Ready to take your fitness to the next level?
          </p>
          <Button asChild size="lg">
            <Link href="#me">Start your journey</Link>
          </Button>
        </FadeIn>
        <FadeIn className="flex items-center justify-center flex-col gap-y-6">
          <Slideshow />
          <Scroll />
        </FadeIn>
      </section>
      <section
        id="me"
        className="flex flex-col gap-y-4 justify-center items-center max-w-3xl mx-auto scroll-mt-24"
      >
        <InView>
          <Image
            placeholder="blur"
            priority
            src={IMG_9211}
            alt={"Fabio Torres"}
            className="h-[240px] w-[240px] aspect-square rounded-full shadow object-cover object-top"
            sizes="240px"
          />
        </InView>
        <InView>
          <div className="flex flex-col gap-y-4 justify-center items-center text-center">
            <Highlight>Fabio Torres</Highlight>
            <h1 className="text-xl lg:text-3xl font-headings">
              I am dedicated to helping individuals of all fitness levels
              achieve their health and wellness goals
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight leading-relaxed">
              Over the last decade in Lisbon, Portugal, I&apos;ve successfully
              helped numerous clients achieve their fitness goals, ranging from
              wheight loss and muscle gain, to improved athletic performance,
              functional rehabilitation and overall fitness.
            </p>
            <p className="text-muted-foreground lg:text-lg tracking-tight leading-relaxed">
              Here are some of the accreditations from the institutes that
              support my work:
            </p>
          </div>
        </InView>
        <InView>
          <div className="max-w-xs sm:max-w-xl mx-auto pt-6">
            <Image
              className="dark:hidden hidden sm:block"
              src={logos}
              alt="Fabio Torres Accreditations"
            />
            <Image
              className="dark:hidden sm:hidden"
              src={logosMobile}
              alt="Fabio Torres Accreditations"
            />
            <Image
              className="hidden dark:sm:block"
              src={logosDark}
              alt="Fabio Torres Accreditations"
            />
            <Image
              className="hidden dark:block dark:sm:hidden"
              src={logosDarkMobile}
              alt="Fabio Torres Accreditations"
            />
          </div>
        </InView>
      </section>
      <section className="flex flex-col gap-y-4 justify-center items-center pt-24 lg:pt-32">
        <InView>
          <div className="flex flex-col gap-y-4 max-w-3xl">
            <div className="flex flex-col gap-y-4">
              <Highlight>Personal Training</Highlight>
              <h1 className="text-lg lg:text-2xl font-headings">
                Are you ready to embark on a journey to transform your health
                and fitness? Look no further!
              </h1>
              <p className="text-muted-foreground lg:text-lg tracking-tight leading-relaxed">
                My personal training program offers tailored 1-1 sessions and
                expert guidance to help you achieve your goals, whether
                you&apos;re aiming to lose weight, build muscle, improve
                endurance, or enhance overall wellness.
              </p>
            </div>
            <Button>Learn more</Button>
          </div>
        </InView>
        <InView>
          <div className="flex flex-col items-end gap-y-4 max-w-3xl">
            <div className="flex flex-col items-end gap-y-4 text-right">
              <Highlight>RFC Mobility Training</Highlight>
              <h1 className="text-lg lg:text-2xl font-headings">
                Mobility is the Foundation to Healthy joints
              </h1>
              <p className="text-muted-foreground lg:text-lg tracking-tight leading-relaxed">
                This is the most comprehensive mobility training system in the
                world that goes beyond traditional stretching routines and
                flexibility methods. FRC not only expands range of motion and
                improves flexibility, but it also strengthens range of motion to
                develop optimal body control.
              </p>
            </div>
            <Button>Learn more</Button>
          </div>
        </InView>
      </section>
      <section className="flex gap-y-4 flex-col justify-center items-center pt-24 lg:pt-32 pb-24">
        <InView>
          <div className="flex gap-y-4 flex-col justify-center items-center text-center max-w-3xl">
            <Highlight>Reviews</Highlight>
            <h1 className="text-xl lg:text-3xl font-headings">
              Commitment reflected in stories of those who share their
              experience
            </h1>
          </div>
        </InView>
        <InView amount="some">
          <div className="flex flex-col gap-y-4 items-center">
            <Reviews reviews={reviews} />
            <Button size="lg" asChild>
              <Link href="https://maps.app.goo.gl/9aVHWEXJ8E4rZ1zJ7">
                More on Google Reviews
              </Link>
            </Button>
          </div>
        </InView>
      </section>
    </div>
  );
}

const staticReviews = {
  rating: 5,
  userRatingCount: 30,
  reviews: [
    {
      name: "places/ChIJ5d1lhqIzGQ0RqL36wcBymyY/reviews/ChZDSUhNMG9nS0VJQ0FnSUNsc2F5MElnEAE",
      relativePublishTimeDescription: "3 months ago",
      rating: 5,
      text: {
        text: "Great place to train with amazing staff; they also speak not only in Portuguese but English. And most important, they have a holistic vision between osteopathy and personalized training.",
        languageCode: "en",
      },
      originalText: {
        text: "Great place to train with amazing staff; they also speak not only in Portuguese but English. And most important, they have a holistic vision between osteopathy and personalized training.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Daniela Villalobos Torres",
        uri: "https://www.google.com/maps/contrib/106329556966057521436/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocJn4LRiNRoXtG1Q6Ff4Tqb01LeUwFC-8V57vJNb20o9=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2023-11-20T21:35:49Z",
    },
    {
      name: "places/ChIJ5d1lhqIzGQ0RqL36wcBymyY/reviews/ChZDSUhNMG9nS0VJQ0FnSUNGeFlLSklnEAE",
      relativePublishTimeDescription: "4 months ago",
      rating: 5,
      text: {
        text: "I've been working with Fabio for the past year and I can highly recommend his services. He speak excellent English and extremely knowledgeable. Initially I came to him to get help with a hip impingment which he resolved quickly. After this I've been using him a a strength coach 3x week with very good progress. He's the best PT I've ever worked with.",
        languageCode: "en",
      },
      originalText: {
        text: "I've been working with Fabio for the past year and I can highly recommend his services. He speak excellent English and extremely knowledgeable. Initially I came to him to get help with a hip impingment which he resolved quickly. After this I've been using him a a strength coach 3x week with very good progress. He's the best PT I've ever worked with.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Victor Hansen",
        uri: "https://www.google.com/maps/contrib/111537559485101205749/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocKq2Htd0_QnmDxvyOAYSlUzn2dEsCVTrtEphoq_6zvxnw=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2023-10-29T20:46:13Z",
    },
    {
      name: "places/ChIJ5d1lhqIzGQ0RqL36wcBymyY/reviews/ChZDSUhNMG9nS0VJQ0FnSUNsanZ6eWNnEAE",
      relativePublishTimeDescription: "3 months ago",
      rating: 5,
      text: {
        text: "I went for two days to Lisbon on a business trip and walked past Telo Studio. I was looking for a place to train in Lisbon in my stay and I couldn't be happier. Highly recommend this guys ! See you sooon ✨",
        languageCode: "en",
      },
      originalText: {
        text: "I went for two days to Lisbon on a business trip and walked past Telo Studio. I was looking for a place to train in Lisbon in my stay and I couldn't be happier. Highly recommend this guys ! See you sooon ✨",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Basilio Paz",
        uri: "https://www.google.com/maps/contrib/110461696352716876082/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjVHszmV2adNOgW4DkF3_0SOH2LiMC1j2yS2FEh83t7K3RL5=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2023-11-18T11:52:48Z",
    },
    {
      name: "places/ChIJ5d1lhqIzGQ0RqL36wcBymyY/reviews/ChZDSUhNMG9nS0VJQ0FnSUNGM1A3UUVREAE",
      relativePublishTimeDescription: "4 months ago",
      rating: 5,
      text: {
        text: "I recently had an osteopathy session at TĒLO and I can honestly say it was a fantastic experience. The osteopath was not only highly skilled but also extremely empathetic and attentive. They took the time to thoroughly assess my issues and explained the treatment plan in detail, making me feel comfortable and informed.",
        languageCode: "en",
      },
      originalText: {
        text: "I recently had an osteopathy session at TĒLO and I can honestly say it was a fantastic experience. The osteopath was not only highly skilled but also extremely empathetic and attentive. They took the time to thoroughly assess my issues and explained the treatment plan in detail, making me feel comfortable and informed.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Manuela Luz",
        uri: "https://www.google.com/maps/contrib/110132609227971670958/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjXU0XGb4CwejTfwmt3vN5CtcJb0qgn51nAf7H_ehvGjB0Q=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2023-10-27T19:03:50Z",
    },
    {
      name: "places/ChIJ5d1lhqIzGQ0RqL36wcBymyY/reviews/ChdDSUhNMG9nS0VJQ0FnSUNGX2FUMjZ3RRAB",
      relativePublishTimeDescription: "3 months ago",
      rating: 5,
      text: {
        text: "What Fabio does, for us lay people, can seem like magic. Somehow he knows what is ailing us, how it can be fixed, and then he proceeds to do just that, fix us. It comes from his deep understanding of how the body works, gathered from years of study and practice. That said, there’s still a little bit of magic happening there as well! Maestro!",
        languageCode: "en",
      },
      originalText: {
        text: "What Fabio does, for us lay people, can seem like magic. Somehow he knows what is ailing us, how it can be fixed, and then he proceeds to do just that, fix us. It comes from his deep understanding of how the body works, gathered from years of study and practice. That said, there’s still a little bit of magic happening there as well! Maestro!",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "John Youden",
        uri: "https://www.google.com/maps/contrib/114413764843608898540/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocIVFbrUr-uqOipL0pZc8ZHd3CkmyoIg0tJZ6G4ied30=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2023-10-31T21:15:27Z",
    },
  ],
};

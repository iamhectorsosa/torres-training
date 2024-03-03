import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/Slideshow";
import { InView } from "@/components/InView";
import Image from "next/image";
import Link from "next/link";
import IMG_9211 from "../public/images/IMG_9211.jpg";
import { Highlight } from "@/components/Highlight";
import { Scroll } from "@/components/Scroll";
import { Reviews } from "@/components/Reviews";
import { Certifications } from "@/components/Certifications";

async function getReviews(): Promise<typeof staticReviews> {
  if (process.env.NODE_ENV !== "production") return staticReviews;

  try {
    const url = `https://places.googleapis.com/v1/places/${process.env.GOOGLE_MAPS_PLACE_ID}?fields=reviews,userRatingCount,rating&languageCode=en&key=${process.env.GOOGLE_MAPS_KEY}`;
    const response = await fetch(url, { next: { revalidate: 86400 } }).then(
      (res) => res.json()
    );

    const { reviews, userRatingCount, rating } = response;
    if (reviews && userRatingCount && rating) {
      return { reviews, userRatingCount, rating };
    }
  } catch (error) {
    console.error(
      error instanceof Error ? error : "Unknown error fetching reviews"
    );
  }

  return staticReviews;
}

export default async function Home() {
  const { reviews } = await getReviews();

  return (
    <div className="gap-y-32 flex flex-col w-full *:px-6 py-[6dvh]">
      <section className="flex flex-col items-center justify-center gap-y-6 !px-0">
        <InView className="flex flex-col gap-y-4 justify-center items-center max-w-4xl text-center h-[60dvh] px-6">
          <Highlight>Torres Training</Highlight>
          <h1 className="text-4xl xs:text-5xl lg:text-6xl 2xl:text-7xl font-headings leading-none">
            Personal Trainer and Osteopath
          </h1>
          <p className="text-muted-foreground text-balance  lg:text-2xl tracking-tight">
            Ready to take your fitness to the next level?
          </p>
          <Button asChild size="lg">
            <Link href="#me">Start your journey</Link>
          </Button>
          <Scroll />
        </InView>
        <InView
          margin={"0px"}
          className="flex items-center justify-center flex-col gap-y-6"
        >
          <Slideshow />
        </InView>
      </section>
      <section
        id="me"
        className="flex flex-col gap-y-8 justify-center items-center scroll-mt-24 !px-0"
      >
        <InView className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-y-4 justify-center items-center text-center">
            <Image
              placeholder="blur"
              priority
              src={IMG_9211}
              alt={"Fabio Torres"}
              className="h-[240px] w-[240px] aspect-square rounded-full shadow object-cover object-top"
              sizes="240px"
            />
            <Highlight>Fabio Torres</Highlight>
            <h1 className="text-xl lg:text-3xl font-headings">
              I am dedicated to helping individuals of all fitness levels
              achieve their health and wellness goals
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight lg:leading-loose leading-loose">
              Over the last decade in Lisbon, Portugal, I&apos;ve successfully
              helped numerous clients achieve their fitness goals, ranging from
              weight loss and muscle gain, to improved athletic performance,
              functional rehabilitation, and overall fitness.
            </p>
          </div>
        </InView>
        <InView>
          <Certifications />
        </InView>
      </section>
      <section className="flex flex-col gap-y-16 justify-center items-center">
        <InView className="flex flex-col gap-y-4 max-w-3xl text-center items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="flex flex-col gap-y-1.5">
              <span className="text-4xl lg:text-6xl font-bold tracking-tigher opacity-60 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-transparent">
                01
              </span>
              <Highlight>Personal Training</Highlight>
            </div>
            <h1 className="text-lg lg:text-2xl font-headings">
              Are you ready to embark on a journey to transform your health and
              fitness? Look no further!
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight lg:leading-loose leading-loose">
              My personal training program offers tailored 1-1 sessions and
              expert guidance to help you achieve your goals, whether
              you&apos;re aiming to lose weight, build muscle, improve
              endurance, or enhance overall wellness.
            </p>
          </div>
          <Button asChild>
            <Link href="https://wa.me/351961379705">Learn more</Link>
          </Button>
        </InView>
        <InView className="flex flex-col gap-y-4 max-w-3xl text-center items-center">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <div className="flex flex-col gap-y-1.5">
              <span className="text-4xl lg:text-6xl font-bold tracking-tigher opacity-60 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-transparent">
                02
              </span>
              <Highlight>RFC Mobility Training</Highlight>
            </div>
            <h1 className="text-lg lg:text-2xl font-headings">
              Mobility is the Foundation to Healthy joints
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight lg:leading-loose leading-loose">
              This is the most comprehensive mobility training system in the
              world that goes beyond traditional stretching routines and
              flexibility methods. FRC not only expands range of motion and
              improves flexibility, but it also strengthens range of motion to
              develop optimal body control.
            </p>
          </div>
          <Button asChild>
            <Link href="https://wa.me/351961379705">Learn more</Link>
          </Button>
        </InView>
      </section>
      <section className="flex gap-y-4 flex-col justify-center items-center !px-0">
        <InView className="flex gap-y-4 flex-col justify-center items-center text-center max-w-3xl px-6">
          <Highlight>Reviews</Highlight>
          <h1 className="text-xl lg:text-3xl font-headings">
            Commitment reflected in stories of those who share their experience
          </h1>
        </InView>
        <InView>
          <Reviews reviews={reviews} />
        </InView>
        <InView className="flex flex-col gap-y-4 items-center px-6">
          <Button size="lg" asChild>
            <Link href="https://maps.app.goo.gl/9aVHWEXJ8E4rZ1zJ7">
              More on Google Reviews
            </Link>
          </Button>
        </InView>
      </section>
    </div>
  );
}

const staticReviews = {
  rating: 5,
  userRatingCount: 100,
  reviews: [
    {
      name: "places/ChIJ65AwT1kzGQ0RMDHb_b8baMA/reviews/ChdDSUhNMG9nS0VJQ0FnSUM5ME5PbnR3RRAB",
      relativePublishTimeDescription: "in the last week",
      rating: 5,
      text: {
        text: "If you're looking for the best fitness guru, Fabio Torres is the real deal. He offers personalized training and osteopathy that's all custom made. His approach includes Functional Range Conditioning, which is a total game-changer by taking traditional stretching up a notch, enhancing your strength and flexibility. It's the support you need to surpass your fitness targets and take control of your body.",
        languageCode: "en",
      },
      originalText: {
        text: "If you're looking for the best fitness guru, Fabio Torres is the real deal. He offers personalized training and osteopathy that's all custom made. His approach includes Functional Range Conditioning, which is a total game-changer by taking traditional stretching up a notch, enhancing your strength and flexibility. It's the support you need to surpass your fitness targets and take control of your body.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Jose Antonio Sosa Salgado",
        uri: "https://www.google.com/maps/contrib/116263050331781336515/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjXloZWO9s3ueu1WsO0eKJNDdYWoiz4sUt6CXqUp60XnM0M=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2024-02-29T13:29:23Z",
    },
    {
      name: "places/ChIJ65AwT1kzGQ0RMDHb_b8baMA/reviews/ChZDSUhNMG9nS0VJQ0FnSUM5a01HYVhREAE",
      relativePublishTimeDescription: "in the last week",
      rating: 5,
      text: {
        text: "Fabio Torres is the fitness coach you've been looking for. He's all about customizing his training and osteopathy to match exactly what you're after. And what really sets him apart is the Functional Range Conditioning (FRC). It's not your average stretching routine—it's a game-changer for building strength and flexibility. Jump into his program, and you'll not only crush your fitness goals but also experience a whole new level of movement for your body.",
        languageCode: "en",
      },
      originalText: {
        text: "Fabio Torres is the fitness coach you've been looking for. He's all about customizing his training and osteopathy to match exactly what you're after. And what really sets him apart is the Functional Range Conditioning (FRC). It's not your average stretching routine—it's a game-changer for building strength and flexibility. Jump into his program, and you'll not only crush your fitness goals but also experience a whole new level of movement for your body.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Kate Strelkova",
        uri: "https://www.google.com/maps/contrib/106784705714508444010/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjVprehhbSAafPHfzmcrM9bVkhEcZIcCTV3VYhhttBXcyqc=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2024-02-29T11:01:30Z",
    },
    {
      name: "places/ChIJ65AwT1kzGQ0RMDHb_b8baMA/reviews/ChZDSUhNMG9nS0VJQ0FnSURkdjVIV1lnEAE",
      relativePublishTimeDescription: "in the last week",
      rating: 5,
      text: {
        text: "Best PT I've ever had. I had trained several times with PTs in the past and I was never very satisfied - since I started training with Fábio, and going through postpartum with twins, I feel like I'm getting in my best physical shape ever. Super professional, dedicated and demanding. Couldn't recommend it more!",
        languageCode: "en",
      },
      originalText: {
        text: "Melhor PT que alguma vez tive. Já tinha treinado várias vezes com PTs no passado e nunca fiquei muito satisfeita - desde que comecei a treinar com o Fábio, e a passar por um pós parto de gémeos, sinto que estou a ficar na minha melhor forma física de sempre. Super profissional, dedicado e exigente. Não poderia recomendar mais!",
        languageCode: "pt",
      },
      authorAttribution: {
        displayName: "Joana Lemos",
        uri: "https://www.google.com/maps/contrib/115167992060565229149/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjVhbA1B867anCPJQ9_6_OptbpPgG7wwH7MN0AQ_4Hr4XPM=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2024-02-28T23:29:20Z",
    },
    {
      name: "places/ChIJ65AwT1kzGQ0RMDHb_b8baMA/reviews/ChdDSUhNMG9nS0VJQ0FnSUM5ME9PU3JBRRAB",
      relativePublishTimeDescription: "in the last week",
      rating: 5,
      text: {
        text: "Fabio 10/10 if you are looking for personalized training according to your needs Fabio has the magic touch, he designs everything with your goals in mind, you will improve your flexibility and strength like nothing else. It's the best way to achieve your fitness goals and keep your body feeling in peak condition.\nHighly recommended!!",
        languageCode: "en",
      },
      originalText: {
        text: "Fabio 10/10 si estás buscando un entrenamiento personalizado acorde a tus necesidades Fabio tiene el toque mágico, diseña todo teniendo en cuenta tus objetivos, mejorarás tu flexibilidad y fuerza como ninguna otra cosa. Es la mejor manera de alcanzar tus objetivos de acondicionamiento físico y hacer que tu cuerpo se sienta en óptimas condiciones.\nMuy recomendado!!",
        languageCode: "es",
      },
      authorAttribution: {
        displayName: "Rosa Zuniga",
        uri: "https://www.google.com/maps/contrib/100580673820830687575/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjXy_VTuBOyypP6V-c1y4CHvLDcxpM3cQKpoOTHgLM0Y1gk=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2024-02-29T13:27:10Z",
    },
  ],
};

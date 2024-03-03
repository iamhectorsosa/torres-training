import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InView } from "@/components/InView";
import { Scroll } from "@/components/Scroll";
import { Slideshow } from "@/components/Slideshow";
import IMG_9211 from "../public/images/IMG_9211.jpg";
import { Certifications } from "@/components/Certifications";
import { Reviews } from "@/components/Reviews";

export default async function Home() {
  const { reviews } = await getReviews();

  return (
    <div className="w-full space-y-16">
      <section className="space-y-4">
        <InView className="flex h-[70dvh] max-w-4xl flex-col justify-center gap-y-4 px-6">
          <div>
            <h1 className="font-bold uppercase tracking-wide lg:text-xl">
              Torres Training
            </h1>
            <h2 className="text-balance font-headings text-6xl font-medium uppercase leading-none lg:text-8xl">
              Personal Trainer and Osteopath
            </h2>
          </div>
          <p className="text-balance text-xl tracking-tight text-muted-foreground">
            Ready to take your fitness to the next level?
          </p>
          <Button asChild size="lg">
            <Link href="#me">Start your journey</Link>
          </Button>
          <Scroll />
        </InView>
        <InView margin="0px">
          <Slideshow />
        </InView>
      </section>
      <section id="me" className="scroll-mt-24 space-y-8">
        <InView className="mx-auto max-w-4xl space-y-4 px-6">
          <Image
            placeholder="blur"
            priority
            src={IMG_9211}
            alt={"Fabio Torres"}
            className="aspect-square size-[240px] rounded-full object-cover object-top shadow"
            sizes="240px"
          />
          <div className="space-y-4">
            <h2 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
              Fabio Torres
            </h2>
            <h3 className="max-w-lg font-bold uppercase tracking-wide md:text-lg lg:text-xl">
              I am dedicated to helping individuals of all fitness levels
              achieve their health and wellness goals
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
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
      <section className="space-y-8">
        <InView className="mx-auto max-w-4xl space-y-4 px-6">
          <div className="space-y-1">
            <span className="bg-gradient-to-b from-foreground via-foreground to-transparent bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent opacity-60">
              01
            </span>
            <h2 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
              Personal Training
            </h2>
          </div>
          <h3 className="max-w-lg font-bold uppercase tracking-wide md:text-lg lg:text-xl">
            Are you ready to embark on a journey to transform your health and
            fitness? Look no further!
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
            Elevate your fitness journey with personalized 1-1 training sessions
            tailored to your goals, preferences, and fitness level. whether
            you&apos;re aiming to lose weight, build muscle, improve endurance,
            or enhance overall wellness, let&apos;s achieve long-lasting
            results.
          </p>
          <Button className="w-fit" variant="secondary" asChild>
            <Link href="/personal-training">Learn more</Link>
          </Button>
        </InView>
        <InView className="mx-auto max-w-4xl space-y-4 px-6">
          <div className="space-y-1">
            <span className="bg-gradient-to-b from-foreground via-foreground to-transparent bg-clip-text text-5xl font-bold leading-none tracking-tight text-transparent opacity-60">
              02
            </span>
            <h2 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
              RFC Mobility Training
            </h2>
          </div>
          <h3 className="max-w-lg font-bold uppercase tracking-wide md:text-lg lg:text-xl">
            Overcome joint limitations and mobility restriction to combact
            chronic pain, stiffness, injuries, and plateaus in strength
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
            Functional Range Conditioning is the most comprehensive mobility
            training system in the world that goes beyond traditional stretching
            routines and flexibility methods. FRC not only expands range of
            motion and improves flexibility, but it also strengthens range of
            motion to develop optimal body control.
          </p>
          <Button className="w-fit" variant="secondary" asChild>
            <Link href="https://wa.me/351961379705">Learn more</Link>
          </Button>
        </InView>
      </section>
      <section className="space-y-4">
        <InView className="mx-auto max-w-4xl space-y-4 px-6">
          <h2 className="text-balance font-headings text-5xl font-medium uppercase leading-none lg:text-6xl">
            Reviews
          </h2>
          <h3 className="max-w-lg font-bold uppercase tracking-wide md:text-lg lg:text-xl">
            Commitment reflected in stories of those who share their experience
          </h3>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground lg:text-xl lg:leading-relaxed">
            My mission is helping my clients stay accountable, motivated and
            transform their lives through an amazing fitness journey.
          </p>
          <Button variant="secondary" asChild>
            <Link href="https://maps.app.goo.gl/iMMfzYVmYkGzsFZ39">
              More on Google Reviews
            </Link>
          </Button>
        </InView>
        <InView className="pb-16">
          <Reviews reviews={reviews} />
        </InView>
      </section>
    </div>
  );
}

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

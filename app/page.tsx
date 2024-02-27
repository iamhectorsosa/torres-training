import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/Slideshow";
import { InView } from "@/components/InView";
import Image from "next/image";
import Link from "next/link";
import IMG_9211 from "../public/images/IMG_9211.jpg";
import logos from "../public/logos.svg";
import logosDark from "../public/logos-dark.svg";
import { Highlight } from "@/components/Highlight";

export default function Home() {
  return (
    <div className="mx-auto space-y-16 flex flex-col items-center py-16 pt-[16dvh] lg:pt-[20dvh]">
      <FadeIn>
        <section className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center max-w-3xl">
          <header className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center text-center">
            <Highlight>Torres Training</Highlight>
            <h1 className="text-4xl lg:text-6xl font-headings">
              Certified Personal Trainer and Osteopath
            </h1>
            <p className="text-muted-foreground text-xl lg:text-2xl tracking-tight">
              Ready to take your fitness to the next level?
            </p>
          </header>
          <Button asChild>
            <Link href="#me">Start your journey</Link>
          </Button>
        </section>
      </FadeIn>
      <FadeIn>
        <Slideshow />
      </FadeIn>
      <section
        id="me"
        className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center max-w-3xl scroll-mt-28"
      >
        <div className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center">
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
            <div className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center text-center">
              <Highlight>Fabio Torres</Highlight>
              <h1 className="text-xl lg:text-3xl font-headings">
                I am dedicated to helping individuals of all fitness levels
                achieve their health and wellness goals
              </h1>
              <p className="text-muted-foreground lg:text-lg tracking-tight">
                Over the last decade in Lisbon, Portugal, I&apos;ve successfully
                helped numerous clients achieve their fitness goals, ranging
                from wheight loss and muscle gain, to improved athletic
                performance, functional rehabilitation and overall fitness.
              </p>
            </div>
          </InView>
          <InView>
            <div className="max-w-lg mx-auto pt-6">
              <Image
                className="dark:hidden"
                src={logos}
                alt="Fabio Torres Accreditations"
              />
              <Image
                className="hidden dark:block"
                src={logosDark}
                alt="Fabio Torres Accreditations"
              />
            </div>
          </InView>
        </div>
      </section>
      <InView>
        <section className="flex flex-col gap-y-3 lg:gap-y-4 max-w-3xl">
          <div className="flex flex-col gap-y-3 lg:gap-y-4">
            <Highlight>Personal Training</Highlight>
            <h1 className="text-lg lg:text-2xl font-headings">
              Are you ready to embark on a journey to transform your health and
              fitness? Look no further!
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight">
              My personal training program offers tailored 1-1 sessions and
              expert guidance to help you achieve your goals, whether
              you&apos;re aiming to lose weight, build muscle, improve
              endurance, or enhance overall wellness.
            </p>
          </div>
          <Button>Learn more</Button>
        </section>
      </InView>
      <InView>
        <section className="flex flex-col items-end gap-y-3 lg:gap-y-4 max-w-3xl">
          <div className="flex flex-col items-end gap-y-3 lg:gap-y-4 text-right">
            <Highlight>RFC Mobility Training</Highlight>
            <h1 className="text-lg lg:text-2xl font-headings">
              Mobility is the Foundation to Healthy joints
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight">
              This is the most comprehensive mobility training system in the
              world that goes beyond traditional stretching routines and
              flexibility methods. FRC not only expands range of motion and
              improves flexibility, but it also strengthens range of motion to
              develop optimal body control.
            </p>
          </div>
          <Button>Learn more</Button>
        </section>
      </InView>
    </div>
  );
}

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

export default function Home() {
  return (
    <div>
      <section className="h-[95dvh] flex flex-col items-center justify-center gap-y-8 lg:gap-y-16 lg:py-32">
        <FadeIn className="flex flex-col gap-y-4 justify-center items-center max-w-4xl text-center lg:mt-auto">
          <Highlight>Torres Training</Highlight>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headings">
            Certified Personal Trainer and Osteopath
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
      <section className="flex flex-col gap-y-4 justify-center items-center pt-24 lg:pt-36 pb-24">
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
    </div>
  );
}

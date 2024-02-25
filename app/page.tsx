import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Slideshow } from "@/components/Slideshow";
import { InView } from "@/components/InView";
import Image from "next/image";
import Link from "next/link";

import FabioTorres from "../public/images/IMG_9211.jpg";

export default function Home() {
  return (
    <div className="mx-auto space-y-16 flex flex-col items-center pt-[16dvh] lg:pt-[20dvh] py-16">
      <FadeIn>
        <div className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center max-w-3xl">
          <header className="space-y-3 lg:space-y-4 text-center">
            <span className="before:block before:absolute before:top-[40%] before:left-[50%] before:-translate-x-[50%] before:w-[115%] before:h-2 before:-skew-y-3 before:bg-amber-200 relative inline-block">
              <span className="relative text-sm uppercase font-medium tracking-wide">
                Torres Training
              </span>
            </span>
            <h1 className="text-4xl lg:text-6xl font-headings">
              Certified Personal Trainer and Osteopath
            </h1>
            <p className="text-muted-foreground text-xl lg:text-2xl tracking-tight">
              Ready to take your fitness to the next level?
            </p>
          </header>
          <Button asChild>
            <Link href="#start-your-journey">Start your journey</Link>
          </Button>
        </div>
      </FadeIn>
      <FadeIn>
        <Slideshow />
      </FadeIn>
      <InView>
        <div
          id="start-your-journey"
          className="text-center space-y-3 lg:space-y-4 max-w-3xl scroll-mt-28"
        >
          <header className="space-y-3 lg:space-y-4">
            <div className="overflow-hidden w-[240px] aspect-square rounded-full relative shadow mx-auto">
              <Image
                src={FabioTorres}
                alt={"Fabio Torres"}
                className="h-fit w-fit object-cover object-top"
                sizes="240px"
                fill
              />
            </div>
            <span className="before:block before:absolute before:top-[40%] before:left-[50%] before:-translate-x-[50%] before:w-[115%] before:h-2 before:-skew-y-3 before:bg-amber-200 relative inline-block">
              <span className="relative text-sm uppercase font-medium tracking-wide">
                Fabio Torres
              </span>
            </span>
            <h1 className="text-xl lg:text-3xl font-headings">
              I am dedicated to helping individuals of all fitness levels
              achieve their health and wellness goals
            </h1>
            <p className="text-muted-foreground lg:text-lg tracking-tight">
              Over the last decade in Lisbon, Portugal, I&apos;ve successfully
              helped numerous clients achieve their fitness goals, ranging from
              wheight loss and muscle gain, to improved athletic performance,
              functional rehabilitation and overall fitness.
            </p>
          </header>
        </div>
      </InView>
      <InView>
        <div className="flex flex-col lg:gap-y-4 gap-y-3 max-w-3xl">
          <header className="space-y-3 lg:space-y-4">
            <span className="before:block before:absolute before:top-[40%] before:left-[50%] before:-translate-x-[50%] before:w-[115%] before:h-2 before:-skew-y-3 before:bg-amber-200 relative inline-block">
              <span className="relative text-sm uppercase font-medium tracking-wide">
                Personal Training
              </span>
            </span>
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
          </header>
          <Button>Learn more</Button>
        </div>
      </InView>
      <InView>
        <div className="flex flex-col items-end lg:gap-y-4 gap-y-3 max-w-3xl">
          <header className="space-y-3 lg:space-y-4 text-right">
            <span className="before:block before:absolute before:top-[40%] before:left-[50%] before:-translate-x-[50%] before:w-[115%] before:h-2 before:-skew-y-3 before:bg-amber-200 relative inline-block">
              <span className="relative text-sm uppercase font-medium tracking-wide">
                RFC Mobility Training
              </span>
            </span>
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
          </header>
          <Button>Learn more</Button>
        </div>
      </InView>
    </div>
  );
}

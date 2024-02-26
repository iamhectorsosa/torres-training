import * as React from "react";
import Image from "next/image";
import LOGO1 from "../public/logos/logo-1.png";
import LOGO2 from "../public/logos/logo-2.webp";
import LOGO3 from "../public/logos/logo-3.jpeg";
import LOGO4 from "../public/logos/logo-4.png";
import LOGO5 from "../public/logos/logo-5.jpeg";
import LOGO6 from "../public/logos/logo-6.png";

export const Certifications: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 lg:gap-y-4 justify-center items-center text-center pt-2">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Image
          src={LOGO1}
          placeholder="blur"
          alt="Pro Sport Physiotherapy"
          className="max-w-[100px] max-h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />

        <Image
          src={LOGO2}
          placeholder="blur"
          alt="NeuroKinetic Therapy"
          className="max-w-[100px] max-h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />

        <Image
          src={LOGO3}
          placeholder="blur"
          alt="Dynamic Neuromuscular Stabilization"
          className="max-w-[60px] max-h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />

        <Image
          src={LOGO4}
          placeholder="blur"
          alt="Active Release Techniques"
          className="max-w-[100px] max-h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />

        <Image
          src={LOGO5}
          placeholder="blur"
          alt="Functional Range Conditioning"
          className="max-w-[100px] max-h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />

        <Image
          src={LOGO6}
          placeholder="blur"
          alt="Postural Restoration Institute"
          className="w-[100px] h-[80px] dark:invert saturate-0 dark:mix-blend-plus-lighter"
        />
      </div>
    </div>
  );
};

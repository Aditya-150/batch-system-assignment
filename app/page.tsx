import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import heroImage from "../public/hero-image.webp";

import { title, subtitle } from "@/components/primitives";
import { PlayIcon } from "@/components/icons";
import { RightArrowIcon, HeroImageMain } from "@/components/icons";
import { Features } from "@/components/features";
import { Advantages } from "@/components/advantages";
import { Testimonial } from "@/components/testimonial";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <>
      <section className="flex flex-row justify-between items-center w-full relative">
        <div className="flex flex-col items-center xl:items-start justify-center gap-4 py-8 md:py-10 w-full">
          <div className="inline-block max-w-xl text-center xl:text-left justify-center xl:justify-start">
            <h1 className={title({ size: "lg" })}>
              Make The Best Financial Decisions
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h2>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              className={buttonStyles({
                class: "bg rounded-[4px] bg-black text-white text-lg py-6 ",
              })}
              href="/#"
            >
              Get Started
              <RightArrowIcon />
            </Link>
            <Link
              isExternal
              className={buttonStyles({
                class: "rounded-[4px] bg-transparent text-black text-lg py-6",
              })}
              href="https://www.youtube.com/watch?v=CKWnWeKvV2g"
            >
              <PlayIcon />
              Watch Video
            </Link>
          </div>

          <Image alt="Hero Image" src={heroImage} />
        </div>
        <div className="xl:absolute xl:-right-48 xl:-top-28 xl:h-[60rem] sm:h-[30rem] hidden xl:flex object-contain">
          <HeroImageMain />
        </div>
      </section>
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
    </>
  );
}

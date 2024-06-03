"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import featureImage from "./../public/feature-image.webp";
import { FeatureIcon1, FeatureIcon2, FeatureIcon3 } from "./icons";

import { title } from "@/components/primitives";

const imageVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};

export const Features = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="flex xl:flex-row justify-between items-center w-full xl:gap-20 xl:my-20 my-10 flex-col-reverse"
      id="features"
    >
      <motion.div
        animate={controls}
        className="xl:max-h-[50rem] xl:max-w-[50rem] w-full h-auto"
        exit="exit"
        initial="hidden"
        variants={imageVariants}
      >
        <Image
          alt="Feature Image"
          className="object-contain max-w-full max-h-full"
          src={featureImage}
        />
      </motion.div>
      <div className="flex flex-col items-start xl:justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-xl text-left justify-start">
          <h2 className="my-2 text-md lg:text-lg tracking-[0.3rem] text-[#FF5555] font-medium">
            FEATURES
          </h2>
          <h1 className={title({ size: "md" })}>Uifry Premium</h1>
        </div>
        <div className="flex flex-col gap-6 text-left justify-between mt-4">
          <div>
            <div className="flex flex-row items-center justify-start gap-2 mb-2">
              <FeatureIcon1 color="#FF5555" />
              <h3 className="font-semibold">Budgeting Intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-start gap-2 mb-2">
              <FeatureIcon2 />
              <h3 className="font-semibold">Budgeting Intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-start gap-2 mb-2">
              <FeatureIcon3 />
              <h3 className="font-semibold">Budgeting Intervals</h3>
            </div>
            <p>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

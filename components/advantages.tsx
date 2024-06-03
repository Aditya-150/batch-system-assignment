"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import advImage1 from "./../public/adv-image1.webp";
import advImage2 from "./../public/adv-image2.webp";
import { FeatureIcon1, NotificationIcon } from "./icons";

import { title } from "@/components/primitives";

const imageVariant1 = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
const imageVariant2 = {
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

export const Advantages = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: false });
  const inView2 = useInView(ref2, { once: false });

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  return (
    <section className="xl:my-20 my-10">
      <div
        ref={ref1}
        className="flex xl:flex-row-reverse justify-between items-center w-full xl:gap-20 flex-col-reverse"
      >
        <motion.div
          animate={controls1}
          className="xl:max-h-[50rem] xl:max-w-[50rem] w-full h-auto"
          exit="exit"
          initial="hidden"
          variants={imageVariant1}
        >
          <Image
            alt="Feature Image"
            className="object-contain max-w-full max-h-full"
            src={advImage1}
          />
        </motion.div>
        <div className="flex flex-col items-start xl:justify-center gap-4 py-8 md:py-10 w-full">
          <div className="inline-block max-w-xl text-left justify-start">
            <h2 className="my-2 text-md lg:text-lg tracking-[0.3rem] text-[#FF5555] font-medium">
              ADVANTAGES
            </h2>
            <h1 className={title({ size: "md" })}>Why Choose Uifry?</h1>
          </div>
          <div className="flex flex-col gap-6 text-left justify-between mt-4">
            <div>
              <div className="flex flex-row items-center justify-start gap-3 mb-4">
                <div className="bg-[#FF5555] p-4 rounded-full">
                  <NotificationIcon />
                </div>
                <h3 className="font-semibold text-[1.5rem]">
                  Clever Notifications
                </h3>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={ref2}
        className="flex xl:flex-row justify-between items-center w-full xl:gap-20 flex-col-reverse"
      >
        <motion.div
          animate={controls2}
          className="xl:max-h-[50rem] xl:max-w-[50rem] w-full h-auto"
          exit="exit"
          initial="hidden"
          variants={imageVariant2}
        >
          <Image
            alt="Feature Image"
            className="object-contain max-w-full max-h-full"
            src={advImage2}
          />
        </motion.div>
        <div className="flex flex-col items-start xl:justify-center gap-4 py-8 md:py-10 w-full">
          <div className="flex flex-col gap-6 text-left justify-between mt-4">
            <div>
              <div className="flex flex-row justify-start gap-3 mb-4 items-center">
                <div className="bg-[#FF5555] p-4 rounded-full">
                  <FeatureIcon1 color="white" />
                </div>
                <h3 className="font-semibold text-[1.5rem]">
                  Fully Customizable
                </h3>
              </div>
              <p>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

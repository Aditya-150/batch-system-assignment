"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Avatar } from "@nextui-org/avatar";

import testimonyImage from "./../public/testimony-image.webp";

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

export const Testimonial = () => {
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
    <section className="flex flex-col gap-10 justify-between items-center my-20">
      <div className="inline-block max-w-xl text-center justify-center">
        <h2 className="my-2 text-md lg:text-lg tracking-[0.3rem] text-[#FF5555] font-medium">
          TESTIMONIAL
        </h2>
        <h1 className={title({ size: "md" })}>What Our Users Say About Us?</h1>
      </div>
      <div
        ref={ref}
        className="flex xl:flex-row justify-between items-center w-full xl:gap-20 flex-col-reverse"
      >
        <motion.div
          animate={controls}
          className="xl:max-h-[50rem] xl:max-w-[50rem] w-full h-auto flex items-center"
          exit="exit"
          initial="hidden"
          variants={imageVariants}
        >
          <Image
            alt="Feature Image"
            className="object-contain max-w-full max-h-full"
            src={testimonyImage}
          />
        </motion.div>
        <div className="flex flex-col items-start xl:justify-center gap-4 py-8 md:py-10 w-full">
          <div className="flex flex-col gap-6 text-left justify-between mt-4">
            <h3 className="font-semibold text-[1.5rem] mb-2">
              The Best Financial Accounting App Ever!
            </h3>
            <p>
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <Avatar
              isDisabled
              size="md"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <Avatar
              isDisabled
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Avatar
              isDisabled
              size="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <Avatar
              isDisabled
              size="md"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
          <p className="text-lg font-semibold">Nick Jonas</p>
        </div>
      </div>
    </section>
  );
};

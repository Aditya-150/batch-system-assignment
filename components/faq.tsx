"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { title } from "@/components/primitives";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Faq = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <section ref={ref}>
      <div className="inline-block max-w-xl sm:text-left sm:justify-start justify-center text-center mb-10">
        <h2 className="my-2 text-md lg:text-lg tracking-[0.3rem] text-[#FF5555] font-medium">
          FAQ
        </h2>
        <h1 className={title({ size: "md" })}>Frequently Asked Questions</h1>
      </div>
      <motion.div
        animate={controls}
        className="grid md:grid-cols-2 gap-5 grid-cols-1"
        initial="hidden"
        variants={containerVariants}
      >
        <motion.div
          className="p-8 rounded-lg bg-[#FF5555] text-white"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
        <motion.div className="p-8 rounded-lg" variants={itemVariants}>
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
        <motion.div
          className="p-8 rounded-lg max-md:bg-[#FF5555] max-md:text-white"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
        <motion.div
          className="p-8 rounded-lg md:bg-[#FF5555] md:text-white"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
        <motion.div
          className="p-8 rounded-lg bg-[#FF5555] text-white"
          variants={itemVariants}
        >
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
        <motion.div className="p-8 rounded-lg" variants={itemVariants}>
          <h3 className="font-semibold text-[1.5rem] mb-2">
            The Best Financial Accounting App Ever!
          </h3>
          <p>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import HowItWorksImageCard from "../HowItWorksCard";
import { HowItWorksImage } from "@/constants";

const HowItWorks = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10 lg:px-0 lg:my-32 lg:w-[80%] lg:mx-auto"
    >
      <motion.h2
        variants={textVariant(0.2)}
        className="font-bold text-3xl text-center my-16 md:text-4xl lg:text-5xl"
      >
        How{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          it works!
        </span>
      </motion.h2>
      <div>
        {HowItWorksImage.map((works, index) => (
          <>
            <HowItWorksImageCard
              key={works.key}
              image={works.image}
              number={works.number}
              title={works.title}
              subtitle={works.subtitle}
              index={index}
            />
          </>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;

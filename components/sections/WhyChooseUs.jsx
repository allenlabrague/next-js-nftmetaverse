"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { WhyChooseUsDetails } from "@/constants";
import { WhyChooseUsCard } from "..";

const WhyChooseUs = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10"
    >
      <motion.h2
        variants={textVariant(0.2)}
        className="font-bold text-3xl text-center my-16"
      >
        Why{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          Choose Us?
        </span>
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        {WhyChooseUsDetails.map((choose, index) => (
          <WhyChooseUsCard
            key={choose.key}
            image={choose.image}
            number={choose.number}
            title={choose.title}
            subtitle={choose.subtitle}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;

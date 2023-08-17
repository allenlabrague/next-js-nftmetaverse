"use client";

import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { staggerContainer, textVariant } from "@/utils/motion";
import { ArtistsDetails } from "@/constants";

const Questions = () => {
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
        Your questions,{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          answered!
        </span>
      </motion.h2>
    </motion.div>
  );
};

export default Questions;

"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { BsLink45Deg } from "react-icons/bs";
import { staggerContainer, slideIn, textVariant } from "@/utils/motion";
import Example from "../CollectionsCard";

const Collections = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10"
    >
      <motion.h2
        variants={textVariant(1)}
        className="font-bold text-3xl text-center my-16"
      >
        Nerko's{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          Collection
        </span>
      </motion.h2>
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="relative"
      >
        <Example />
      </motion.div>
      <motion.div
        variants={textVariant(1.3)}
        className="flex items-center justify-center"
      >
        <Button
          className="bg-gradient-to-tr from-purple-800 to-pink-600 text-white font-semibold rounded-full mt-12"
          endContent={<BsLink45Deg fontSize={20} />}
        >
          View Collection
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Collections;

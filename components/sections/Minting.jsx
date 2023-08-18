"use client";

import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { BsLink45Deg } from "react-icons/bs";
import { staggerContainer, textVariant } from "@/utils/motion";

const Minting = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 bg-[url(/bg-minting.png)] md:bg-[url(/bg-lg-minting.png)] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center h-[500px]"
    >
      <motion.h2
        variants={textVariant(0.4)}
        className="font-bold text-3xl text-center md:text-4xl lg:text-5xl"
      >
        Let's start{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          minting
        </span>
      </motion.h2>
      <motion.p
        variants={textVariant(0.5)}
        className="text-gray-500 text-center text-sm my-7"
      >
        Invest and manage all your NFTs at once place
      </motion.p>
      <motion.div variants={textVariant(0.6)}>
        <Button
          className="bg-gradient-to-tr from-purple-800 to-pink-600 text-white font-semibold rounded-full mx-auto"
          endContent={<BsLink45Deg fontSize={20} />}
        >
          Get started
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Minting;

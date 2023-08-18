"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { BsCoin } from "react-icons/bs";

const Feedback = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-10 px-10"
    >
      <motion.div
        variants={textVariant(0.2)}
        className="p-7 border-1 border-gray-400 rounded-3xl flex flex-col items-center justify-center gap-10 w-full lg:w-[60%] mx-auto"
      >
        <h2 className="font-bold text-3xl text-center md:text-4xl lg:text-5xl">
          Never{" "}
          <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
            miss a drop!
          </span>
        </h2>
        <p className="text-center text-sm text-gray-500">
          Subcribe to our super-rare and exclusive drops & collectibles
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full md:w-[50%]">
          <Input placeholder="Enter your email" />
          <Button
            className="bg-gradient-to-tr from-purple-800 to-pink-600 text-white font-semibold rounded-full"
            endContent={<BsCoin />}
          >
            Subscribe
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Feedback;

"use client";

import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { BsLink45Deg } from "react-icons/bs";

const HowItWorksImageCard = ({ image, index, number, title, subtitle }) => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center justify-center gap-5"
      variants={slideIn("left", "spring", index * 0.5, 0.75)}
    >
      <Image src={image} className="my-10" />
      <div className="md:w-[50%] flex flex-col items-center md:items-start justify-center gap-5">
        <h3 className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent font-bold text-xl">
          0{number}.
        </h3>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-gray-500 text-sm">{subtitle}</p>
        <Button
          className="bg-white text-gray-500 font-semibold rounded-full my-5"
          endContent={<BsLink45Deg fontSize={20} />}
        >
          View in OPENSEA
        </Button>
      </div>
    </motion.div>
  );
};

export default HowItWorksImageCard;

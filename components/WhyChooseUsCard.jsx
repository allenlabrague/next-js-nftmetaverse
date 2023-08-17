"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Image } from "@nextui-org/react";

const WhyChooseUsCard = ({ image, title, subtitle, index }) => {
  return (
    <motion.div
      className="p-7 border-1 border-gray-400 rounded-3xl w-full"
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    >
      <Image src={image} />
      <h2 className="font-bold text-xl my-5">{title}</h2>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default WhyChooseUsCard;

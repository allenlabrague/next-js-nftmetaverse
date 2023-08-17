"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Image } from "@nextui-org/image";

const RoadMapCard = ({ number, title, subtitle, index, image }) => {
  return (
    <motion.div
      className="p-7 border-1 border-gray-400 rounded-3xl w-full"
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    >
      <div className="flex items-center justify-between">
        <h3 className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent font-bold text-sm">
          PHASE 0{number}
        </h3>
        <Image src={image} />
      </div>
      <h2 className="font-bold text-xl my-5">{title}</h2>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </motion.div>
  );
};

export default RoadMapCard;

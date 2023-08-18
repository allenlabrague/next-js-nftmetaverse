"use client";

import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import RoadMapCard from "../RoadMapCard";
import { RoadmapDetails } from "@/constants";

const RoadMap = () => {
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
        Nerko's{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          Roadmap
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {RoadmapDetails.map((map, index) => (
          <RoadMapCard
            key={map.key}
            number={map.number}
            title={map.title}
            image={map.image}
            subtitle={map.subtitle}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default RoadMap;

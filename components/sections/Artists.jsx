"use client";

import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { staggerContainer, textVariant } from "@/utils/motion";
import { ArtistsDetails } from "@/constants";

const Artists = () => {
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
        Meet{" "}
        <span className="bg-gradient-to-tr from-purple-800 to-pink-600 bg-clip-text text-transparent">
          the artists
        </span>
      </motion.h2>
      <div className="grid grid-cols-2 place-content-center w-full gap-8">
        {ArtistsDetails.map((index) => (
          <motion.div
            variants={textVariant(0.5)}
            key={index.key}
            className="grid place-content-center gap-2"
          >
            <Image src={index.image} isBlurred isZoomed />
            <h3 className="font-bold text-xl mt-3 text-center">
              {index.title}
            </h3>
            <p className="text-gray-500 text-sm text-center">
              {index.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2">
              {index.social.map((img, index) => (
                <img key={index} src={img.image} alt={`Social ${index}`} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Artists;
